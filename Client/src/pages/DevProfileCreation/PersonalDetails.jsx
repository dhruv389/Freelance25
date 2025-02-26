import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

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
    onNext(data);
  };

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      location: { ...prev.location, [name]: value },
    }));
    onNext(data);
  };

  const handleLanguagesChange = (e) => {
    const value = e.target.value.split(",").map((lang) => lang.trim());
    setData((prev) => ({ ...prev, languages: value }));
    onNext(data);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setData((prev) => ({ ...prev, profilePicture: file }));
      onNext(data);
    }
  };

  return (
    <motion.div
      className="h-full w-full flex flex-col bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl items-start space-y-6 overflow-y-auto text-white p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl font-semibold">Personal Details</h2>
      <Separator className="w-full bg-white/20" />
      <Card className="w-full p-6 bg-black  backdrop-blur-lg border-none rounded-2xl shadow-lg">
        <CardContent className="flex flex-col items-center space-y-6">
          {/* Profile Picture Upload */}
          <Label className="w-24 h-24 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center cursor-pointer border-2 border-gray-500 hover:border-white transition">
            {preview ? (
              <img src={preview} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              "Upload"
            )}
            <input type="file" name="profilePicture" className="hidden" onChange={handleFileChange} />
          </Label>

        

          {/* Name Fields */}
          <div className="w-full flex justify-between items-center space-x-4">
            <Input
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              className=" border-gray-600 text-white h-[3rem] w-1/2 p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              className=" border-gray-600 text-white h-[3rem] w-1/2 p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Title & Bio */}
          <Input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className=" border-gray-600 text-white h-[3rem] w-full p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <Textarea
            name="bio"
            placeholder="Bio"
            onChange={handleChange}
            className=" border-gray-600 text-white h-[5rem] w-full p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Location Fields */}
          <div className="w-full flex justify-between items-center space-x-4">
            <Input
              name="country"
              placeholder="Country"
              onChange={handleLocationChange}
              className=" border-gray-600 text-white h-[3rem] w-1/2 p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <Input
              name="city"
              placeholder="City"
              onChange={handleLocationChange}
              className=" border-gray-600 text-white h-[3rem] w-1/2 p-4 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Language Selector */}
             <Input name="languages" placeholder="Languages" onChange={handleLanguagesChange} className="bg-black/50 h-[3rem] text-white border-gray-500 w-full p-4 rounded-lg " />

          {/* Save Button */}
        
        </CardContent>
      </Card>
    </motion.div>
  );
}
