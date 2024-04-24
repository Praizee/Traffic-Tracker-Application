import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase.js";

const AuthRoute = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        setLoading(false);
        if (user) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          navigate("/");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        setAuthenticated(false);
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="circle animate-loader"></span>
        <span className="circle animate-loader animation-delay-200"></span>
        <span className="circle animate-loader animation-delay-400"></span>
      </div>
    );
  }

  if (!authenticated) {
    return null; // Render nothing if not authenticated
  }

  return children;
};

export default AuthRoute;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../Firebase/firebase.js";

// const AuthRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is authenticated, allow access
//         setLoading(false);
//       } else {
//         // User is not authenticated, redirect to the login page
//         navigate("/");
//       }
//     });

//     return () => {
//       // Clean up the event listener
//       unsubscribe();
//     };
//   }, [navigate]);

//   if (loading) {
//     // Display a 'bouncing loader' loading indicator
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <span className="circle animate-loader"></span>
//         <span className="circle animate-loader animation-delay-200"></span>
//         <span className="circle animate-loader animation-delay-400"></span>
//       </div>
//     );
//   }

//   // When the loading is complete, render the child components
//   return children;
// };

// export default AuthRoute;