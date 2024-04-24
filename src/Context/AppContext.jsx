import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../Firebase/firebase.js";

// Context for the app's state
const AppContext = createContext();

// Custom hook for accessing the app's context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Define the AppProvider component that wraps the app and manages the state
export const AppProvider = ({ children }) => {
  // State variables for user data and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Subscribe to authentication changes
  useEffect(() => {
    console.log("Loading state:", loading);

    // onAuthStateChanged listens for authentication state changes in Firebase
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      console.log("Auth state changed:", authUser);

      if (authUser) {
        // If a user is authenticated, retrieve their data from the database
        const { uid, email } = authUser;

        const db = getDatabase();
        const userRef = ref(db, "users/" + uid);

        try {
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const { full_name, gender, busStop, dob, address, phone, email } =
              userData;

            // Update the user state with the retrieved data
            setUser({
              uid,
              email,
              fullName: full_name, // Map to 'fullName'
              gender: gender,
              busStop: busStop,
              dob: dob,
              phone: phone,
              address: address,
              // Add other user data fields here
            });
            console.log("User authenticated:", authUser);
          } else {
            // Handle the case where user data does not exist in the database
            console.log("User not authenticated");
          }
        } catch (error) {
          // Handle database retrieval errors
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null); // No authenticated user
      }
      setLoading(false); // Set loading to false after handling authentication changes
    });

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);

  // Provide the user and loading state as a value to the context
  return (
    <AppContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AppContext.Provider>
  );
};
