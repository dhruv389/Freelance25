import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Skills from "./Skills";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Education from "./Education";
import Availability from "./Availability";
import ReviewSubmit from "./ReviewSubmit";
import { Button } from "@/components/ui/button";

const steps = [
  "Personal Details",
  "Skills",
  "Experience",
  "Portfolio",
  "Education",
  "Availability",
  "Review & Submit",
];

export default function MainDevProfilePage(onClose) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };
  
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="max-w-2xl w-full bg-white text-black p-6 shadow-lg rounded-xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">{steps[step]}</h2>
        {step === 0 && <PersonalDetails onNext={handleNext} />}
        {step === 1 && <Skills onNext={handleNext} onBack={handleBack} />}
        {step === 2 && <Experience onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <Portfolio onNext={handleNext} onBack={handleBack} />}
        {step === 4 && <Education onNext={handleNext} onBack={handleBack} />}
        {step === 5 && <Availability onNext={handleNext} onBack={handleBack} />}
        {step === 6 && <ReviewSubmit formData={formData} onBack={handleBack} />}
        
        <div className="flex justify-between mt-4">
          {step > 0 && <Button onClick={handleBack} variant="outline">Back</Button>}
        </div>
      </div>
    </div>
  );
}
