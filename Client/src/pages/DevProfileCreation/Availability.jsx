import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Availability({ onNext, onBack }) {
  const [data, setData] = useState({ hourlyRate: "", availability: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <input name="hourlyRate" type="number" placeholder="Hourly Rate" onChange={handleChange} />
      <input name="availability" placeholder="Availability" onChange={handleChange} />
      <Button onClick={onBack}>Back</Button>
      <Button onClick={() => onNext(data)}>Next</Button>
    </div>
  );
}
