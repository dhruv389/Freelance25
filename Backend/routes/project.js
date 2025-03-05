const express=require('express');
const Project = require('../models/project.model');












const router=express.Router();
router.get("/",(req,res)=>{
    res.json({
        message:"This is project Page"
    })
})

// router.post("/createproject", async (req, res) => {
//     try {
//       const formdata = req.body;
//       console.log(formdata);
  
//       // Ensure title is provided
//       if (!formdata.title) {
//         return res.status(400).json({ message: "Project title is required." });
//       }
  
//       // Check if a project with the same title already exists
//       const existingProject = await Project.findOne({ title: formdata.title });
//       if (existingProject) {
//         return res.status(400).json({ message: "Project title must be unique." });
//       }
  
//       // Create a new project instance with correct data structure
//       const newProject = new Project({
//         ...formdata, // Spread the form data properly
//       });
  
//       // Save the project to the database
//       await newProject.save();
//       res.status(201).json({ message: "Project created successfully", newProject });
//     } catch (error) {
//       console.error("Error creating project:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });
  



router.get("/getProjects",async (req,res)=>{
    try {
        const projects=await Project.find();
        res.status(200).json({
            sucess:true,
            projects
        })
    } catch (error) {
        res.json({
            message:"Error in getting projects "+error.message
        })
    }
})
// Route to get projects by a specific skill
router.get("/skill/:skill", async (req, res) => {
    try {
      const { skill } = req.params;
      
      if (!skill) {
        return res.status(400).json({ message: "Skill parameter is required." });
      }
  
      // Find projects that include the given skill
      const projects = await Project.find({ skillsRequired: skill });
  
      if (projects.length === 0) {
        return res.status(404).json({ message: "No projects found with this skill." });
      }
  
      res.status(200).json({ success: true, projects });
    } catch (error) {
      console.error("Error fetching projects by skill:", error);
      res.status(500).json({ message: "Server error. Please try again later." });
    }
  });
  
router.get("/getProjectbyid/:id",async (req,res)=>{
    try {
        const { id } = req.params;
    
        // Validate if ID is a valid MongoDB ObjectId
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
          return res.status(400).json({ message: "Invalid project ID format." });
        }
    
        // Find the project by ID
        const project = await Project.findById(id);
    
        // If project not found
        if (!project) {
          return res.status(404).json({ message: "Project not found." });
        }
    
        res.status(200).json(project);
      } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ message: "Internal server error." });
      }
})


router.get("/getProjectbyclerkid/:id",async (req,res)=>{
    try {
        const { id } = req.params;
    
        // Validate if ID is a valid MongoDB ObjectId
     
    
        // Find the project by ID
    const projects = await Project.find({clerkId: id });
    
        // If project not found
        if (!projects) {
          return res.status(404).json({ message: "Project not found." });
    }
    
        res.status(200).json(projects);
      } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({ message: "Internal server error." });
      }
})



router.post("/updateProject/:id",async (req,res)=>{
    try {
        const project=await Project.findById(req.params.id);
        
        if(!project){
            return res.status(400).json({
                message:"Project not found"
            })
        }
        const updateProject=await Project.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        })
        res.status(200).json({
            sucess:true,
            message:"Project updated sucessfully",
            updateProject
        })
    } catch (error) {
        res.status(400).json({
            message:"Error in updating project "+error.message
        })
    }
})








module.exports=router;