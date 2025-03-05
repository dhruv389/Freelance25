import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react"; // Import your authentication hook if using Clerk
// Create Context
const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
  const { user } = useUser(); // Authenticated User
  const [userData3, setUserData3] = useState(null);
  const [error, setError] = useState("");

  // Fetch user data when the authenticated user is available
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user?.id) return; // Prevent API call if user ID is missing
        const response = await axios.get(`http://localhost:8080/freelancer/getfreelancer/${user?.id}`);
        setUserData3(response.data);
        console.log("User Data:", response.data);
      } catch (err) {
        setError("User not found or server error.");
      }
    };

    fetchUser();
  }, [user]);

  return (
    <UserContext.Provider value={{ userData3, error }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom Hook for consuming the User Context
export const useUserContext = () => useContext(UserContext);
