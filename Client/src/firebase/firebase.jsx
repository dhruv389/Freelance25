

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
;

// Firebase configuration
const firebaseConfig = {
  apiKey: "jejiejije8PoDFNs0",
  authDomain: "comp.com",
  projectId: "coms-87685",
  storageBucket: "co",
  messagingSenderId: "55175",
  appId: "1:5291dd512",
  measurementId: "G-NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create context for Firebase
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// Firebase Provider component
export const FirebaseProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [useruid, setuseruid] = useState("");
 const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user.uid);
      if (user) {
        setUser(user);
        setuseruid(user.uid);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const isLoggedin = !!user;
  if(user) setIsLoading(false);

  return (
    <FirebaseContext.Provider value={{ isLoggedin,app,auth, user, useruid }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { app, auth };

