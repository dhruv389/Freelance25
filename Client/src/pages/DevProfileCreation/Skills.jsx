import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const freelancingOptions = {
  "Web Development": ["Frontend Development", "Backend Development", "Full Stack Development", "WordPress Development", "E-commerce Development", "Web Design", "API Development", "Web Application Security", "Progressive Web Apps (PWA)", "CMS Development"],
  "Mobile Development": ["iOS Development", "Android Development", "React Native Development", "Flutter Development", "Cross-Platform Development", "Mobile Game Development", "Mobile App Testing", "Mobile App UI/UX Design", "Mobile App Maintenance", "AR/VR Mobile Apps"],
  "Design & Creative": ["Graphic Design", "UI/UX Design", "Logo Design", "Illustration", "Branding & Identity", "Print Design", "Packaging Design", "Motion Graphics", "3D Modeling & Rendering", "Storyboarding"],
};

export default function Skills({ onNext }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [skills, setSkills] = useState([]); // Changed to a simple array

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onNext({ skills });
  };

  const handleSkillChange = (skill) => {
    setSkills((prevSkills) => {
        onNext({ skills });
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
        // Remove skill if already selected
      } else {
        return [...prevSkills, skill];
         // Add skill if not selected
      }
    });
    onNext({ skills });
  };

  const handleSubmit = () => {
    onNext({ skills }); // Pass skills as a simple array
  };

  return (
    <motion.div 
      className="h-full w-full flex flex-col items-start bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl justify-center  text-white p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Skills</h2>
      <Separator className="w-full bg-white/20" />
        
      <div className="flex w-[80%] flex-col space-y-4">
        <label className="text-lg font-medium">Category</label>
        <select 
          onChange={handleCategoryChange} 
          value={selectedCategory} 
          className="w-full p-3 bg-black/50 rounded-lg text-white border border-gray-500"
        >
          <option value="">Select Category</option>
          {Object.keys(freelancingOptions).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
        
      {selectedCategory && (
        <div className="space-y-4 mt-8">
          <h3 className="text-lg font-medium">Select Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {freelancingOptions[selectedCategory].map((skill) => (
              <label key={skill} className="flex items-center space-x-2 bg-black/50 p-3 rounded-lg cursor-pointer hover:bg-black/60">
                <input
                  type="checkbox"
                  id={skill}
                  checked={skills.includes(skill)} // Check if skill is in the array
                  onChange={() => handleSkillChange(skill)}
                  className="form-checkbox text-blue-500"
                />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <Button onClick={handleSubmit} className="mt-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-md">
        Save Skills
      </Button>
    </motion.div>
  );
}