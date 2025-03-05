const mongoose = require("mongoose");
const Project = require("./project.model");


const freelanceSchema =  new mongoose.Schema({
    role:{type:String, default:"freelancer" , required:true},
    clerkId:{type:String,required:true},
    firstName: String,
    lastName: String,
    title: String,
    bio: String,
    skills: [String],
    hourlyRate: Number,
    availability: String,
     likes:Number,
    education: [
      {
        institution: String,
        degree: String,
        fieldOfStudy: String,
      },
    ],
    experience: [
      {
        company: String,
        position: String,
        description: String,
        startDate: Date,
        endDate: Date,
      },
    ],
    review: [
      {
        projectid: String,
        clientid: String,
        comment: String,
        reply: String,
        rating: Number,
      },
    ],
    languages: [String],
    location: {
      country: String,
      city: String,
    },
    PropsalStatus:[{
        projectid:String,
        ProjectTitle:String,
        status:String,
    }],
    profilePicture: String, // base64 or URL
    rating: Number,
    totalReviews: Number,
  });


const Freelancer = mongoose.model("Freelancer", freelanceSchema);
module.exports = Freelancer;
