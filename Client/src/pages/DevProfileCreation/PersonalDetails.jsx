import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PersonalDetails({ onNext }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    bio: "",
    profilePicture: "",
    location: { country: "", city: "" },
  });

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

  return (
    <div>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="bio" placeholder="Bio" onChange={handleChange} />
      <input name="country" placeholder="Country" onChange={handleLocationChange} />
      <input name="city" placeholder="City" onChange={handleLocationChange} />
      <Button onClick={() => onNext(data)}>Next</Button>
    </div>
  );
}
