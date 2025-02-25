import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PersonalDetails({ onNext }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    bio: "",
    profilePicture: "",
    location: { country: "", city: "" },
    languages: [],
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: value },
    }));
  };

  const handleLanguagesChange = (e) => {
    const value = e.target.value.split(",").map((lang) => lang.trim());
    setData((prev) => ({ ...prev, languages: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setData((prev) => ({ ...prev, profilePicture: file }));
    }
  };

  return (
    <motion.div 
      className=" h-full w-[80%] flex items-center space-y-4 overflow-y-auto  flex-col justify-center text-white p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     
      
        
          <label className="w-20 h-20 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center cursor-pointer">
            {preview ? <img src={preview} alt="Profile" className="w-full h-full object-cover" /> : "Upload"}
            <input type="file" name="profilePicture" className="hidden" onChange={handleFileChange} />
          </label>
          <div className="w-full   space-y-6">
            <div className="w-full flex justify-between items-center">
            <Input name="firstName" placeholder="First Name" onChange={handleChange} className="bg-black/50 border-gray-500 h-[3rem] w-[40%] p-4 rounded " />
          
          <Input name="lastName" placeholder="Last Name" onChange={handleChange} className="bg-black/50 h-[3rem] border-gray-500 w-[40%] p-4 rounded " />
            </div>
           
            
            <Input name="title" placeholder="Title" onChange={handleChange} className="bg-black/50 h-[3rem] border-gray-500 w-full p-4 rounded " />
        
            <Textarea name="bio" placeholder="Bio" onChange={handleChange} className="bg-black/50 h-[3rem] border-gray-500 w-full p-4 rounded " />
            <div className="w-full flex justify-between items-center">
            <Input name="country" placeholder="Country" onChange={handleLocationChange} className="bg-black/50 border-gray-500 h-[3rem] w-[40%] p-4 rounded " />
            
            <Input name="city" placeholder="City" onChange={handleLocationChange} className="bg-black/50 h-[3rem] border-gray-500 w-[40%] p-4 rounded " />
            </div>
          
           
            <Input name="languages" placeholder="Languages" onChange={handleLanguagesChange} className="bg-black/50 h-[3rem] border-gray-500 w-full p-4 rounded " />
          
        </div>
        <button onClick={() => onNext(data)} className="w-[30%] mt-12 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-4 rounded-lg text-xl">
          Next
        </button>
    
    </motion.div>
  );
}
