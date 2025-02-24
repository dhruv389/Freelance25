import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Experience({ onNext, onBack }) {
  const [experience, setExperience] = useState([]);

  const addExperience = () => {
    setExperience([...experience, { company: "", position: "", description: "", startDate: "", endDate: "" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experience];
    updated[index][name] = value;
    setExperience(updated);
  };

  return (
    <div>
      {experience.map((exp, index) => (
        <div key={index}>
          <input name="company" placeholder="Company" onChange={(e) => handleChange(index, e)} />
          <input name="position" placeholder="Position" onChange={(e) => handleChange(index, e)} />
          <textarea name="description" placeholder="Description" onChange={(e) => handleChange(index, e)} />
          <input type="date" name="startDate" onChange={(e) => handleChange(index, e)} />
          <input type="date" name="endDate" onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <Button onClick={addExperience}>Add Experience</Button>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={() => onNext({ experience })}>Next</Button>
    </div>
  );
}
