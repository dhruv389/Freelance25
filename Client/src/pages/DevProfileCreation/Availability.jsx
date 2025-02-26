import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Availability({ onNext }) {
  const [data, setData] = useState({ hourlyRate: "", availability: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    onNext({ ...data, [name]: value });
  };

  return (
    <motion.div
      className="w-full max-w-md bg-black/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-gray-700 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold mb-4">Set Your Availability</h2>

      {/* Hourly Rate Input */}
      <div className="space-y-2 mb-4">
        <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
        <Input
          id="hourlyRate"
          name="hourlyRate"
          type="number"
          placeholder="Enter hourly rate"
          className="bg-black/60 border-gray-500 w-full p-3 rounded-lg text-white"
          onChange={handleChange}
        />
      </div>

      {/* Availability Input */}
      <div className="space-y-2 mb-4">
        <Label htmlFor="availability">Availability</Label>
        <Input
          id="availability"
          name="availability"
          placeholder="Enter availability (e.g. 40 hrs/week)"
          className="bg-black/60 border-gray-500 w-full p-3 rounded-lg text-white"
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-4" onClick={() => onNext(data)}>
        Save & Continue
      </Button>
    </motion.div>
  );
}
