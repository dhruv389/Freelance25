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

export default function MainDevProfilePage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    // setStep((prev) => prev + 1);
  };
  
  const handleBack = () => setStep((prev) => prev - 1);

  return (
    <div className="flex min-h-screen bg-black text-white">




<aside className="w-[20%] p-6 top-[7rem]   sticky h-full">

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
      
            <Skills onNext={handleNext}  />
       
      
         <Experience  onNext={handleNext}  />
      
         <Education onNext={handleNext}  />
         <Availability onNext={handleNext}  />
         <ReviewSubmit formData={formData} onNext={handleNext} />
        
        {/* <div className="flex justify-between mt-4">
          {step > 0 && <Button  onClick={handleBack} variant="outline" className="text-black">Back</Button>}
          <Button onClick={handleNext} variant="outline"  className="text-black">next</Button>
        </div> */}
      </div>
    </div>
  );
}