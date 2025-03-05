import { Button } from "@/components/ui/button";
import axios from "axios";

export default function ReviewSubmit({ formData, onBack }) {


  const createClient = async (formData) => {
    console.log(formData);
  try {
    const response = await axios.post("http://localhost:8080/clients/createClient", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Client created successfully!", response.data);
  } catch (error) {
    console.error("Error creating client:", error.response?.data || error.message);
  }
};
  
  return (
    <div className="flex flex-col w-[50vw] overflow-auto">
      <h3>Review Your Information</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    
      <Button onClick={() => createClient(formData)}>Submit</Button>
    </div>
  );
}
