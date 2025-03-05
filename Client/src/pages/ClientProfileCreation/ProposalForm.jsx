import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const freelancingOptions = {
  "Web Development": ["Frontend Development", "Backend Development", "Full Stack Development", "WordPress Development", "E-commerce Development", "Web Design", "API Development", "Web Application Security", "Progressive Web Apps (PWA)", "CMS Development"],
  "Mobile Development": ["iOS Development", "Android Development", "React Native Development", "Flutter Development", "Cross-Platform Development", "Mobile Game Development", "Mobile App Testing", "Mobile App UI/UX Design", "Mobile App Maintenance", "AR/VR Mobile Apps"],
  "Design & Creative": ["Graphic Design", "UI/UX Design", "Logo Design", "Illustration", "Branding & Identity", "Print Design", "Packaging Design", "Motion Graphics", "3D Modeling & Rendering", "Storyboarding"],
};

export default function ProposalForm() {
  const { isSignedIn, user } = useUser();

  // State to store form data
  const [formData, setFormData] = useState({
    clerkId: "", // Will be set via useEffect
    amount: 100,
    timeRequired: 0,
    description: "We require a data analyst to analyze our existing sales data...",
    title: "Software Development",
    image: ["sihusb", "suhb"],
    status: "Pending",
    skills: [],
    profileImage:"",
    clientname: "",
    location :"",

  });

  // Set clerkId when user data is available
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({ ...prev, clerkId: user.id }));
      setFormData((prev) => ({ ...prev, profileImage: user.imageUrl }));
    
      setFormData((prev) => ({ ...prev, clientname: user.firstName+" "+user.lastName }));
      setFormData((prev) => ({ ...prev, location: user.publicMetadata?.location }));
    }
  }, [user]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle skills selection
  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(",").map(skill => skill.trim());
    setFormData((prev) => ({ ...prev, skills: skillsArray }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    try {
      const response = await axios.post("http://localhost:8080/proposals/createProposal", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Proposal submitted successfully!", response.data);
    } catch (error) {
      console.error("Error submitting proposal:", error.response?.data || error.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create Proposal</Button>
      </DialogTrigger>
      <DialogContent className="bg-black/80 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg text-white">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4"
        >
          <DialogTitle>
            <h2 className="text-2xl font-semibold">Submit a Proposal</h2>
          </DialogTitle>

          <Card className="w-full bg-black/60 p-6 rounded-xl">
            <CardContent className="space-y-4">
              {/* Title */}
              <Input
                name="title"
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="border-gray-600 text-white"
                required
              />

              {/* Amount */}
              <Input
                name="amount"
                type="number"
                placeholder="Proposal Amount ($)"
                value={formData.amount}
                onChange={handleChange}
                className="border-gray-600 text-white"
                required
              />

              {/* Time Required */}
              <Input
                name="timeRequired"
                type="number"
                placeholder="Time Required (Days)"
                value={formData.timeRequired}
                onChange={handleChange}
                className="border-gray-600 text-white"
                required
              />

              {/* Description */}
              <Textarea
                name="description"
                placeholder="Describe your proposal..."
                value={formData.description}
                onChange={handleChange}
                className="border-gray-600 text-white"
                required
              />

              {/* Skills */}
              <Input
  name="skills"
  type="text"
  placeholder="Enter skills (comma-separated)"
  value={formData.skills ? formData.skills.join(", ") : ""}
  onChange={handleSkillsChange}
  className="border-gray-600 text-white"
/>
            </CardContent>
          </Card>

          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">
            Submit Proposal
          </Button>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
}
