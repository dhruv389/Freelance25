/* eslint-disable no-unused-vars */
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Education from "./Education";
import Availability from "./Availability";
import ReviewSubmit from "./ReviewSubmit";
import { Button } from "@/components/ui/button";
import axios from "axios";

const steps = [
  "Personal Details",
  "Skills",
  "Experience",
  "Portfolio",
  "Education",
  "Availability",
  "Review & Submit",
];

export default function MainDevProfilePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const onReviewSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await axios.post('http://localhost:8080/extractResumeDetails', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      setFormData((prev) => ({ ...prev, ...response['data'] }));
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // setStep((prev) => prev + 1);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };
  const handleBack = () => setStep((prev) => prev - 1);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const fileInput = e.target.elements.file;
  //   if (fileInput.files.length > 0) {
  //     const file = fileInput.files[0];
  //     console.log(file);
  //   }
  // };

  return (
    <div className="">
      <div className="flex justify-center items-center mb-1 "><input type="file" placeholder="Add Your Resume" onChange={handleFileChange} /></div>
      <div className="flex min-h-screen bg-black text-white">
      <aside className="w-[20%] p-6 top-[7rem] sticky h-full">
        <nav className="space-y-4">
          {steps.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase().replace(/ /g, "-")}`}
              className="block p-2 bg-white/10 rounded-lg hover:bg-white/20"
            >
              {section}
            </a>
          ))}
        </nav>
      </aside>

      <div className="w-3/4  h-full flex justify-center items-center flex-col  p-8 space-y-12">
        <PersonalDetails onNext={handleNext} />

        <Skills onNext={handleNext} />

        <Experience onNext={handleNext} />

        <Education onNext={handleNext} />
        <Availability onNext={handleNext} />
        <ReviewSubmit formData={formData} />

        {/* <div className="flex justify-between mt-4">
          {step > 0 && <Button  onClick={handleBack} variant="outline" className="text-black">Back</Button>}
          <Button onClick={handleNext} variant="outline"  className="text-black">next</Button>
        </div> */}
      </div>
    </div>
    </div>
  );
}
