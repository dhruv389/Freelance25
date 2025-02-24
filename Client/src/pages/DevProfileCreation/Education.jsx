import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Education({ onNext, onBack }) {
  const [education, setEducation] = useState([]);

  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", fieldOfStudy: "" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...education];
    updated[index][name] = value;
    setEducation(updated);
  };

  return (
    <div>
      {education.map((edu, index) => (
        <div key={index}>
          <input name="institution" placeholder="Institution" onChange={(e) => handleChange(index, e)} />
          <input name="degree" placeholder="Degree" onChange={(e) => handleChange(index, e)} />
          <input name="fieldOfStudy" placeholder="Field of Study" onChange={(e) => handleChange(index, e)} />
        </div>
      ))}
      <Button onClick={addEducation}>Add Education</Button>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={() => onNext({ education })}>Next</Button>
    </div>
  );
}
