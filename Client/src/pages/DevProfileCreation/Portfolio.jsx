import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

export default function Portfolio({ onNext }) {
 const [portfolio, setPortfolio] = useState([]);
 const [loading, setLoading] = useState(false);
const { isSignedIn, user } = useUser();
const [devproject , setdevproject]=useState([]);
const [error, setError] = useState("");
 
// useEffect(() => {
//   if (user) {
//     fetchProject(user.id);
//   }
// }, []);

// const fetchProject = async (clerkId) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/projects/getProjectbyclerkid/${clerkId}`);
//     setdevproject(response.data);
//     console.log(response.data);
//   } catch (err) {
//     setError(err.response?.data?.message || "Error fetching proposals");
//   } finally {
//     setLoading(false);
//   }
// };

 const addProject = () => {
  setPortfolio([
   ...portfolio,
   {
    devname:user.firstName+" "+user.lastName,
    clerkId: user.id,
    profileimage: user?.imageUrl,
    thumbnail: [],
    title: "",
    description: "",
    Likes: 0,
    link: "",
    ratings: 0,
    skillsRequired: [],
    Price: [{ packageType: "", chargePerPage: 0, deliveryDate: "", functionality: "" }],
   },
  ]);
 };











 const uploadImages = async (files, index) => {

  if (!files.length) {
  
  alert("Please select images to upload!");
  
  return;
  
  }
  
  
  
  setLoading(true);
  
  const cloudName ="dk7te6qfq"
  
  ; // Replace with your Cloudinary cloud name
  
  const uploadPreset = "q1cafzpe";
  
  const uploadedUrls = [];
  
  
  
  for (let i = 0; i < files.length; i++) {
  
  const formData = new FormData();
  
  formData.append("file", files[i]);
  
  formData.append("upload_preset", uploadPreset);
  
  
  
  try {
  
  const response = await axios.post(
  
  `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  
  formData
  
  );
  
  uploadedUrls.push(response.data.secure_url);
  
  console.log(uploadedUrls);
  
  } catch (error) {
  
  console.error("Upload failed:", error);
  
  }
  
  }
  
  
  
  setPortfolio((prev) => {
  
  const updated = [...prev];
  
  updated[index].thumbnail = uploadedUrls; // Store multiple image links in `thumbnail`
  
  return updated;
  
  });
  
  
  
  setLoading(false);
  
  };
 const handleChange = (index, e, pIndex) => {
  const { name, value } = e.target;
  const updated = [...portfolio];

  if (pIndex !== undefined) {
   // Handle Price array changes
   updated[index].Price[pIndex][name] = value;
  } else {
   // Handle other portfolio changes
   updated[index][name] = value;
  }

  setPortfolio(updated);
 };


 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(portfolio)
  try {
   const response = await axios.post("http://localhost:8080/projects/createproject", portfolio[0]);
   alert("Project created successfully!");
   console.log(response.data);
  } catch (error) {
   console.error("Error creating project:", error);
   alert("Failed to create project");
  }
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
       <span className="text-white">Upload Images</span>
       <input
        type="file"
        multiple
        className="hidden"
        onChange={(e) => uploadImages(e.target.files, index)}
       />
       {project.thumbnail.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mt-2">
         {project.thumbnail.map((url, i) => (
          <img key={i} src={url} alt="Project" className="w-24 h-24 rounded-lg object-cover" />
         ))}
        </div>
       )}
      </Label>
      <Separator />

      {/* Project Name */}
      <Input name="title" placeholder="Project Name" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
      {/* description Project */}
      <Textarea name="description" placeholder="description Project" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
      {/* Project Link */}
      <Input name="link" placeholder="Project Link" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
      {/* Skills Required */}
      <Input name="skillsRequired" placeholder="Skills Required (comma-separated)" onChange={(e) => handleChange(index, e)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />

      {/* Pricing Section */}
      <Separator />
      <div className="space-y-4">
       <span className="text-white text-lg font-semibold">Pricing</span>
       {project.Price.map((price, pIndex) => (
        <div key={pIndex} className="bg-gray-900/60 p-4 rounded-lg">
         <Input name="packageType" placeholder="Package Type" onChange={(e) => handleChange(index, e, pIndex)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
         <Input type="number" name="chargePerPage" placeholder="Charge per Page" onChange={(e) => handleChange(index, e, pIndex)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
         <Input type="date" name="deliveryDate" placeholder="Delivery Date" onChange={(e) => handleChange(index, e, pIndex)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
         <Textarea name="functionality" placeholder="Functionality" onChange={(e) => handleChange(index, e, pIndex)} className="bg-gray-800 border-gray-600 text-white rounded-lg" />
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
   <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-500 transition text-white font-semibold p-3 rounded-lg">
    Submit
   </Button>
  
  </motion.div>
 );
}