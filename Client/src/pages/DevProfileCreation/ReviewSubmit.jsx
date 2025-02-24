import { Button } from "@/components/ui/button";

export default function ReviewSubmit({ formData, onBack }) {
  return (
    <div>
      <h3>Review Your Information</h3>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={() => alert("Profile Submitted!")}>Submit</Button>
    </div>
  );
}
