const express = require("express")
const router = express.Router();
const clientModel = require("../models/client.model")

router.get("/getclients",  async (req, res) => {
    try {
        const Clients = await clientModel.find();
        res.status(200).json({Clients})
       
    } catch (err) {
        res.status(400).json({"message" : "Error fetching the clients" , error : err.message})
    }
})
router.post("/createClient", async (req, res) => {
    try {
       
       

          const formData = req.body;

        if (!formData.clerkId || !formData.firstName || !formData.lastName || !formData.companyName || !formData.bio) {
            return res.status(400).json({ message: "Clerk ID, First Name, Last Name, Company Name, and Bio are required!" });
          }

          const existingClient = await clientModel.findOne({ clerkId:formData.clerkId });

          if (existingClient) {
            return res.status(400).json({ message: "Client with this Clerk ID already exists!" });
          }

        const newClient =  new clientModel(formData);

    

    await newClient.save();
    res.status(200).json({ "mesagse": "Client created succesfully", "Client Data": newClient });

    } catch (err) {
        res.status(400).json({ message: "Error creating client", error: err.message })
    }

})




router.get("/getclient/:id", async (req, res) => {
    try {
        const id = req.params.id

        const user = await clientModel.findOne({ clerkId: id });

        if (user) {

            res.status(200).json({ "message": "Found the user", "user": user })
        }
        else {
            res.status(200).json({ "message": "No such user exist" })
        }

    } catch (error) {
        res.status(500).json({
            message: "Cant add project to portfolio" + error.message
        })
    }
})





router.get("/getclientbyobjectid/:id", async (req, res) => {
    try {
        const id = req.params.id
              console.log(id)
        const user = await clientModel.findOne({ _id: id });

        if (user) {
          
            res.status(200).json({ "message": "Found the user", "user": user })
        }
        else {
            res.status(200).json({ "message": "No such user exist" })
        }
        console.log(user)
    } catch (error) {
        res.status(500).json({
            message: "Cant add project to portfolio" + error.message
        })
    }
})
module.exports = router