const express = require("express");
const freelance = require("../models/freelance.model")
const router = express.Router()

router.get("/getfreelancer", async (req, res) => {
    try {
        const freelancers = await freelance.find()

        res.status(200).json({
            freelancers
        })
    } catch (error) {
        res.status(400).json({ message: "Error getting freelancer", error: err.message })
    }
})

router.post("/createfreelancer", async (req, res) => {
    try {
        const userData = req.body;
    
        // Validate required fields
        if (!userData.firstName || !userData.lastName) {
          return res.status(400).json({ message: "First Name and Last Name are required!" });
        }
        const existingUser = await freelance.findOne({ clerkId:userData.clerkId });

        if (existingUser) {
          return res.status(400).json({ message: "User with this Clerk ID already exists!" });
        }
        // Create new user instance
        const newUser = new freelance(userData);
    
        // Save to database
        const savedUser = await newUser.save();
    
        // Success Response
        res.status(201).json({ message: "User created successfully!", user: savedUser });
      } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
      }
})
router.post("/addPortfolioProject", async (req, res) => {
    try {
        const { id, projectName, description, link, images } = req.body;
        const getUser = await freelancer.findById(freelancerId);
        if (!getUser) {
            return res.status(404).json({
                message: "Freelancer not found"
            })
        }
        const newPortfolioProject = {
            projectName,
            description,
            link,
            images
        }
        getUser.portfolio.push(newPortfolioProject);
        await getUser.save();
        res.status(200).json({
            message: "Project Added Sucessfully",
            getUser
        })
    } catch (error) {
        res.status(500).json({
            message: "Cant add project to portfolio" + error.message
        })
    }
})


router.get("/getfreelancer/:id", async (req, res) => {
    try {
        const id = req.params.id

        const user = await freelance.findOne({ clerkId: id });
    console.log(user);
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




router.get("/getfreelancerbyobjectId/:id", async (req, res) => {
    try {
        const id = req.params.id

        const user = await freelance.findOne({ _id: id });
    console.log(user);
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
module.exports = router
