// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtph7NRDYrLCbCliFPEpgVpqGVfSrUWl4",
  authDomain: "traffic-tracker-application.firebaseapp.com",
  projectId: "traffic-tracker-application",
  storageBucket: "traffic-tracker-application.appspot.com",
  messagingSenderId: "625664817297",
  appId: "1:625664817297:web:d3e40d258499d3b52fa730",
  // The value of `databaseURL` depends on the location of the database
  databaseURL:
    "https://traffic-tracker-application-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
