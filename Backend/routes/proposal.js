const express = require("express");
// Import Proposal model
const Proposal = require("../models/proposal.model");

const Client = require('../models/client.model');
const freelance = require('../models/freelance.model');






const groq=require("groq-sdk");
const groqClient=new groq({
    apiKey:process.env.GROQ_API_KEY
})
async function main(data1,data2) {
    try {
        const chatCompletion = await groqClient.chat.completions.create({
            messages: [{
                role: 'user', content: "Evaluate if the freelancer is a good fit for the project which is posted by the client on our freelancing website. The project description is: " + data2 + " and the freelancer's skills are: " + data1 + ". Respond with only 'yes' or 'no' based on a thorough analysis."}],
            model: "gemma2-9b-it",
        });
    
        const extractData=chatCompletion.choices[0].message.content
        // console.log(extractData.trim())
        return extractData;
        // let startIndex=extractData.indexOf("{");
        // let endIndex=extractData.lastIndexOf("}");
        // let jsonData=extractData.substring(startIndex,endIndex+1);
        // jsonData=jsonData.trim();
        // const jsonObject=await JSON.parse(jsonData);
        // return jsonObject;
    } catch (error) {
        throw new Error(error.message)
    }
}
async function main2(data1,data2) {
    try {
        const chatCompletion = await groqClient.chat.completions.create({
            messages: [{
                role: 'user', content: "the project uploaded by client on our freelancing website " + data2 + "and the freelancer has skills and previous experience in data : "+data1 + "Can you make proposal for the project from the freelancer side and in this proposal you can include your previous work and skills which was required in your project and experience and why you are the best fit for this project. And Please make sure that all text should be in plain text format."}],
            model: "llama-3.3-70b-versatile",
        });
    
        const extractData=chatCompletion.choices[0].message.content
        console.log(extractData.trim())
        return extractData;
        
    } catch (error) {
        throw new Error(error.message)
    }
}



const router = express.Router();

// POST request to create a new proposa
router.post("/createProposal", async (req, res) => {
  try {
    const { clerkId, amount, timeRequired,skills, description, title, image, status ,location, profileImage,clientname } = req.body;

    // Validate required fields
    if (!clerkId || !title || !amount || !timeRequired || !description) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }

    // Create a new proposal instance
    const newProject = new Proposal({
      clerkId,
      title,
      amount,
      skill:skills,
      timeRequired,
      description,
      image,
      status: status || "Pending", // Default to Pending if not provided
     location, profileImage,clientname
    });




    // Save to database
   
    await newProject.save();

    
    const freelancers = await freelance.find();
    let chosenFreelancers = [];

    // AI Matching Logic (Runs in parallel for efficiency)
    await Promise.all(freelancers.map(async (freelancer) => {
        const freelancerData = JSON.stringify(freelancer);
        const projectData = `${title} ${description} ${skills?.join(" ")}`;

        let chatResponse = await main(freelancerData, projectData);
        chatResponse = chatResponse.trim().toLowerCase();

        if (chatResponse === "yes") {
            console.log(`✅ Matched: ${freelancer.name}`);

            // Ensure `newProjectNotification` exists before pushing
            if (!freelancer.newProjectNotification) {
                freelancer.newProjectNotification = [];
            }

            freelancer.newProjectNotification.push({
                ProjectId: newProject._id,
                isRead: false
            });

            await freelancer.save();
            chosenFreelancers.push(freelancer);
        }
    }));

    return res.status(201).json({
        success: true,
        message: "New proposal created successfully!",
        newProject,
        chosenFreelancers,
        freelancers
    });
    
    res.status(201).json({ message: "Proposal created successfully!", proposal: newProposal });
  } catch (error) {
    console.error("Error creating proposal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Get proposals by clerkId
router.get("/proposals2/:clerkId", async (req, res) => {
  try {
    const { clerkId } = req.params;
    const proposals = await Proposal.find({ clerkId });

    if (!proposals.length) {
      return res.status(404).json({ message: "No proposals found for this clerkId" });
    }

    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

router.get("/proposalbyid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const proposals = await Proposal.find({_id:id});

    if (!proposals.length) {
      return res.status(404).json({ message: "No proposals found for this clerkId" });
    }

    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

router.get("/proposals", async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.status(200).json(proposals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching proposals", error: error.message });
  }
});

router.delete("/deleteproposals", async (req, res) => {
  try {
    await Proposal.deleteMany({});
    res.status(200).json({ message: "All proposals deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting proposals", error: error.message });
  }
});







router.post("/:id/interested", async (req, res) => {
  console.log("----")
  try {
    const { profileImage, devname, rating, title, amount,timeRequiredbydev,comment } = req.body;
    const { id } = req.params;

    // Find the proposal and update
    const updatedProposal = await Proposal.findByIdAndUpdate(
      id,
      {
        $push: {
          proposalRequests: { profileImage, devname, rating, title, status: "Pending",amount,timeRequiredbydev,comment },
        },
      },
      { new: true }
    );

    if (!updatedProposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }
    console.log(updatedProposal)

    res.json({ message: "Interest added successfully", proposal: updatedProposal });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


router.get("/proposalRequests/:proposalId", async (req, res) => {
  try {
    console.log("---- roposalRequests")
    const { proposalId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(proposalId)) {
      return res.status(400).json({ message: "Invalid proposal ID" });
    }

    const proposal = await Proposal.findById(proposalId);

    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }
  console.log(proposal.proposalRequests)
    res.status(200).json(proposal.proposalRequests);
  } catch (error) {
    console.error("Error fetching proposal requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/assignedProposalRequests/:proposalId", async (req, res) => {
  try {
    const { proposalId } = req.params;

 

    const proposal = await Proposal.findById(proposalId);

    if (!proposal) {
      return res.status(404).json({ message: "Proposal not found" });
    }

    // Filter only assigned proposalRequests
    const assignedRequests = proposal.proposalRequests.filter(
      (request) => request.status === "Assigned"
    );

    res.status(200).json(assignedRequests);
  } catch (error) {
    console.error("Error fetching assigned proposal requests:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});







router.put("/update-status", async (req, res) => {
  const { proposalId, requestId } = req.body; // Get data from frontend

  if (!proposalId || !requestId) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    const updatedProposal = await Proposal.findOneAndUpdate(
      { _id: proposalId, "proposalRequests.objectId": requestId },
      { $set: { "proposalRequests.$.status": "Assigned" } },
      { new: true } // Return updated document
    );

    if (!updatedProposal) {
      return res.status(404).json({ success: false, message: "Proposal or request not found" });
    }

    res.status(200).json({ success: true, data: updatedProposal });
  } catch (error) {
    console.error("Error updating proposal request status:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});







module.exports = router;