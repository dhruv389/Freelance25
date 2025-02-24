import { useState } from "react";
import { Button } from "@/components/ui/button";

const freelancingOptions = {
  "Web Development": ["Frontend Development", "Backend Development", "Full Stack Development", "WordPress Development", "E-commerce Development", "Web Design", "API Development", "Web Application Security", "Progressive Web Apps (PWA)", "CMS Development"],
  "Mobile Development": ["iOS Development", "Android Development", "React Native Development", "Flutter Development", "Cross-Platform Development", "Mobile Game Development", "Mobile App Testing", "Mobile App UI/UX Design", "Mobile App Maintenance", "AR/VR Mobile Apps"],
  "Design & Creative": ["Graphic Design", "UI/UX Design", "Logo Design", "Illustration", "Branding & Identity", "Print Design", "Packaging Design", "Motion Graphics", "3D Modeling & Rendering", "Storyboarding"],
};

export default function Skills({ onNext, onBack }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [skills, setSkills] = useState({});

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSkillChange = (skill) => {
    setSkills((prevSkills) => {
      const updatedSkills = { ...prevSkills };
      if (!updatedSkills[selectedCategory]) {
        updatedSkills[selectedCategory] = [];
      }
      if (updatedSkills[selectedCategory].includes(skill)) {
        updatedSkills[selectedCategory] = updatedSkills[selectedCategory].filter((s) => s !== skill);
      } else {
        updatedSkills[selectedCategory] = [...updatedSkills[selectedCategory], skill];
      }
      return updatedSkills;
    });
  };

  return (
    <div>
      <h2>Select a Category</h2>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">Select Category</option>
        {Object.keys(freelancingOptions).map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {selectedCategory && (
        <div>
          <h3>Select Skills</h3>
          {freelancingOptions[selectedCategory].map((skill) => (
            <div key={skill}>
              <input
                type="checkbox"
                id={skill}
                checked={skills[selectedCategory]?.includes(skill) || false}
                onChange={() => handleSkillChange(skill)}
              />
              <label htmlFor={skill}>{skill}</label>
            </div>
          ))}
        </div>
      )}

      <Button onClick={onBack}>Back</Button>
      <Button onClick={() => onNext({ skills })}>Next</Button>
    </div>
  );
}