const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    
    clerkId:String,
    devname:String,
    profileimage:String,
  thumbnail: [String],
  title: {
    type: String,
    required: true,
    unique:true,
  },
  description: {
    type: String,
    required: true,
    
  },
  
  skillsRequired: {
    type:[String],
    required:true,
  },
 likes: {type:Number,default:0},
  
  Price :[{
        packageType: "string", // Basic, Standard, Premium
        chargePerPage:Number,
        deliveryDate: String,
        functionality: "string" // Description of the functionality provided
  }]
       
,  
  datePosted: { type: Date, default: Date.now() },
  review:{
    type:String,
    username:String,
    comment:String,
    image:String,
   
  },
  link :{
    type:String,
    default:""
  },
  ratings:{
    type:Number,
    default:0
  }
},{
    timestamps:true
});
const Project=mongoose.model('Project',projectSchema);
module.exports=Project; 