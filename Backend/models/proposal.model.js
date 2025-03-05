const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema(
  {
    clerkId: { type: String, required: true },
    image: [{ type: String }],
    amount: { type: Number, required: true },
    title: { type: String, required: true },
    timeRequired: { type: Number, required: true },
    skill: [{ type: String, required: true }],
    status: {
      type: String,
      enum: ["Pending", "Assigned", "Closed"],
      default: "Pending",
    },
    profileImage: { type: String, required: true },
    clientname: { type: String, required: true },                              
    description: { type: String, required: true },
    location: { type: String },
    proposalRequests: [ // Renamed to proposalRequests for clarity
      {
        objectId: { type: String, required: true },
        profileImage: { type: String }, // Removed required, as it may be optional
        devname: { type: String, required: true },
        rating: { type: Number, required: true },
        status: { type: String, required: true, default: "Pending" },
        title: { type: String, required: true },
        amount: { type: Number, required: true },
        timeRequiredbydev: { type: Number, required: true },
        comment: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Proposal = mongoose.model("Proposal", proposalSchema);

module.exports = Proposal;