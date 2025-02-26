import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Experience({ onNext, onBack }) {
  const [experience, setExperience] = useState([
    { company: "", position: "", description: "", startDate: "", endDate: "" },
  ]);

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
    <motion.div
      className="h-full w-full flex flex-col items-center  justify-center overflow-y-auto text-white p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     <Button onClick={addExperience} className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg shadow-md">
            Add Experience
          </Button>
      <div className="w-full  flex flex-col justify-center  max-w-3xl h-[70vh] space-y-6 overflow-y-auto">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-black bg-opacity-40 backdrop-blur-lg shadow-lg border border-gray-700 space-y-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Input name="company" placeholder="Company" value={exp.company} onChange={(e) => handleChange(index, e)}
              className="bg-transparent border border-gray-600 text-white w-full p-3 rounded-lg focus:ring focus:ring-blue-500"
            />
            <Input name="position" placeholder="Position" value={exp.position} onChange={(e) => handleChange(index, e)}
              className="bg-transparent border border-gray-600 text-white w-full p-3 rounded-lg focus:ring focus:ring-blue-500"
            />
            <Textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleChange(index, e)}
              className="bg-transparent border border-gray-600 text-white w-full p-3 rounded-lg focus:ring focus:ring-blue-500"
            />
            <div className="flex space-x-4">
              <Input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleChange(index, e)}
                className="bg-transparent border border-gray-600 text-white w-1/2 p-3 rounded-lg focus:ring focus:ring-blue-500"
              />
              <Input type="date" name="endDate" value={exp.endDate} onChange={(e) => handleChange(index, e)}
                className="bg-transparent border border-gray-600 text-white w-1/2 p-3 rounded-lg focus:ring focus:ring-blue-500"
              />
            </div>
          </motion.div>
        ))}

        <div className="flex justify-between">
          <Button onClick={onBack} className=" hover:bg-gray-800 text-white p-3 rounded-lg shadow-md">
            Back
          </Button>
         
          <Button onClick={() => onNext({ experience })} className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg shadow-md">
            Next
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
