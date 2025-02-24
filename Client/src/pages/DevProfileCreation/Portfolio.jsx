import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio({ onNext, onBack }) {
  const [portfolio, setPortfolio] = useState([]);

  const addProject = () => {
    setPortfolio([
      ...portfolio,
      { thumbnail: null, projectName: "", description: "", link: "" },
    ]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...portfolio];
    updated[index][name] = value;
    setPortfolio(updated);
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    const updated = [...portfolio];
    updated[index].thumbnail = file; // Store the file object
    setPortfolio(updated);
  };

  return (
    <div>
      {portfolio.map((project, index) => (
        <div key={index}>
          {/* File Input for Thumbnail */}
          <input
            type="file"
            name="thumbnail"
            onChange={(e) => handleFileChange(index, e)}
          />
          {/* Project Name Input */}
          <input
            name="projectName"
            placeholder="Project Name"
            value={project.projectName}
            onChange={(e) => handleChange(index, e)}
          />
          {/* Description Textarea */}
          <textarea
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={(e) => handleChange(index, e)}
          />
          {/* Project Link Input */}
          <input
            name="link"
            placeholder="Project Link"
            value={project.link}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}
      <Button onClick={addProject}>Add Project</Button>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={() => onNext({ portfolio })}>Next</Button>
    </div>
  );
}