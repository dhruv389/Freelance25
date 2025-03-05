import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@clerk/clerk-react";

export default function Education({ onNext }) {
  const [education, setEducation] = useState([]);
  const { isSignedIn, user } = useUser();
  console.log(user);
 
  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", fieldOfStudy: "" }]);
    onNext({ education });
    onNext({clerkId: user?.id});
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...education];
    updated[index][name] = value;
    setEducation(updated);
    onNext({ education });
    onNext({clerkId: user?.id});
  };

  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl space-y-6 p-6 bg-black/50 backdrop-blur-md rounded-2xl shadow-lg text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">Education</h2>
      <Separator className="w-full bg-white/20" />
      
      {education.map((edu, index) => (
        <Card key={index} className="w-full p-4 bg-black/30 rounded-lg shadow-md">
          <div className="space-y-4">
            <Input 
              name="institution" 
              placeholder="Institution" 
              value={edu.institution} 
              onChange={(e) => handleChange(index, e)}
              className="bg-black/60 text-white border-gray-500 rounded"
            />
            <Input 
              name="degree" 
              placeholder="Degree" 
              value={edu.degree} 
              onChange={(e) => handleChange(index, e)}
              className="bg-black/60 text-white border-gray-500 rounded"
            />
            <Input 
              name="fieldOfStudy" 
              placeholder="Field of Study" 
              value={edu.fieldOfStudy} 
              onChange={(e) => handleChange(index, e)}
              className="bg-black/60 text-white border-gray-500 rounded"
            />
          </div>
        </Card>
      ))}
      
      <Button onClick={addEducation} className="bg-white text-black hover:bg-gray-200">
        Add Education
      </Button>
    </motion.div>
  );
}