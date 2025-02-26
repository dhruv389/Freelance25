import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Portfolio({ onNext }) {
  const [portfolio, setPortfolio] = useState([]);

  const addProject = () => {
    setPortfolio([
      ...portfolio,
      { 
        thumbnail: "", projectName: "", About: "", Likes: 0, link: "", rating: 0, 
        Price: [{ packageType: "", chargePerPage: 0, deliveryDate: "", functionality: "" }]
      },
    ]);
    onNext({ portfolio });
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...portfolio];
    updated[index][name] = value;
    setPortfolio(updated);
    onNext({ portfolio });
  };

  const handleFileChange = (index, e) => {
    const file = e.target.files[0];
    const updated = [...portfolio];
    updated[index].thumbnail = URL.createObjectURL(file);
    setPortfolio(updated);
    onNext({ portfolio });
  };

  return (
    <motion.div 
      className="h-full w-full border bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl flex flex-col items-start space-y-6 p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

<h2 className="text-2xl font-semibold">Projects</h2>
      <Separator className="w-full bg-white/20" />

      {portfolio.map((project, index) => (
        <Card key={index} className="w-full p-6 bg-black/50 backdrop-blur-lg shadow-xl rounded-2xl">
          <CardContent className="flex flex-col space-y-6">
            {/* Thumbnail Upload */}
            <Label className="w-full flex flex-col items-center">
              <span className="text-white">Upload Thumbnail</span>
              <input type="file" name="thumbnail" className="hidden" onChange={(e) => handleFileChange(index, e)} />
              {project.thumbnail && <img src={project.thumbnail} alt="Project" className="w-32 h-32 rounded-lg object-cover mt-2" />}
            </Label>
            <Separator />

            {/* Project Name */}
            <Input name="projectName" placeholder="Project Name" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
            {/* About Project */}
            <Textarea name="About" placeholder="About Project" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
            {/* Project Link */}
            <Input name="link" placeholder="Project Link" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
            
            {/* Pricing Section */}
            <Separator />
            <div className="space-y-4">
              <span className="text-white text-lg font-semibold">Pricing</span>
              {project.Price.map((price, pIndex) => (
                <div key={pIndex} className="bg-gray-900/60 p-4 rounded-lg">
                  <Input name="packageType" placeholder="Package Type" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
                  <Input type="number" name="chargePerPage" placeholder="Charge per Page" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
                  <Input type="date" name="deliveryDate" placeholder="Delivery Date" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
                  <Textarea name="functionality" placeholder="Functionality" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
                </div>
              ))}
            </div>
            <Separator />
          </CardContent>
        </Card>
      ))}
      <Button onClick={addProject} className="w-full bg-blue-600 hover:bg-blue-500 transition text-white font-semibold p-3 rounded-lg">
        Add Project
      </Button>
    </motion.div>
  );
}
