import { Button } from "@/components/ui/button";
import axios from "axios";

export default function ReviewSubmit({ formData }) {
    
    const sendData = async (formData) => {
  try {
    console.log("Data being sent:", formData);
    const response = await axios.post("http://localhost:8080/freelancer/createfreelancer", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Data sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
  return (
    <div>
      <Button onClick={() => sendData(formData)}>Submit</Button>
      <h3>Review Your Information</h3>
      {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
     
    </div>
  );
}
