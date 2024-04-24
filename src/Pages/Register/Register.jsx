import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../Firebase/firebase.js";
import { getDatabase, ref, set } from "firebase/database";
import { useAppContext } from "../../Context/AppContext";

import { LoadingOutlined } from "@ant-design/icons";
import Alerts from "../../Components/Alerts/Alerts.jsx";

const Register = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setConfirmPasswordHidden] = useState(true);

  const { user, setUser } = useAppContext(); // Use the user state from the context
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const initialUserState = {
    fullName: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    dob: "",
    address: "",
    busStop: "",
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessages([]);
    setSuccessMessages([]); // Clear any existing success messages

    // Extract user input
    const { email, phone, password, fullName, gender, dob, address, busStop } =
      user;

    // Check if any field is empty
    if (
      !email ||
      !phone ||
      !password ||
      !fullName ||
      !gender ||
      !dob ||
      !address ||
      !busStop
    ) {
      setErrorMessages(["Please fill in all fields."]);
      return;
    }

    // Check if the email is valid
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setErrorMessages(["Invalid email. Email should contain an '@'."]);
      return;
    }

    // Check if passwords match
    if (password !== user.confirmPassword) {
      setErrorMessages((prev) => [...prev, "Passwords do not match."]);
      return;
    }

    // Check if the password meets your criteria
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessages([
        "Password should be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one number.",
      ]);
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: `${fullName}`,
      });

      // Send email verification
      await sendEmailVerification(userCredential.user);

      const db = getDatabase();
      const usersRef = ref(db, "users/" + userCredential.user.uid);

      set(usersRef, {
        full_name: fullName,
        email: email,
        phone: phone,
        password: password,
        gender: gender,
        dob: dob,
        address: address,
        bus_stop: busStop,
      });

      // Add the success message here
      console.log(
        "Account created successfully! Please check your email to verify your account."
      );
      setSuccessMessages([
        "Account created successfully! Please check your email to verify your account.",
      ]);

      // Automatically clear the success message and navigate after 5 seconds
      setTimeout(() => {
        setSuccessMessages([]);
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Error creating user:", error);
      setErrorMessages([error.message]);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <main className="w-full lg:px-12 md:px-5 md:pt-10 pt-16 px-4 bg-hero-bg bg-cover bg-center min-h-screen flex flex-col items-center justify-center sm:px-4">
    <main className="w-full lg:px-12 md:px-5 md:pt-10 pt-16 px-4 bg-[url(https://res.cloudinary.com/stephen1407/image/upload/v1710101299/hero-bg_wpnnsm.png)] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-6 text-[#67749680] sm:max-w-md">
        <div>
          <div className="mt-5 space-y-2">
            <h3 className="text-[#011750] text-2xl font-bold sm:text-3xl">
              Register
            </h3>
            <p className="text-white">Time to Beat Lagos Traffic</p>
          </div>
          <p className="text-white mt-6">
            Already a User?{" "}
            <Link
              to="/login"
              className="font-bold link link-hover text-[#011750]/80 hover:text-[#011750]"
            >
              Login
            </Link>
          </p>
        </div>
        <div className="bg-white/5 shadow-lg p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 text-white"
          >
            {/* fullname */}
            <div>
              <label htmlFor="FullName" className="font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="FullName"
                value={user?.fullName ?? ""}
                onChange={(e) => handleChange(e)}
                name="fullName"
                autoFocus
                required
                placeholder="Full Name"
                className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="Email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="Email"
                value={user?.email ?? ""}
                onChange={(e) => handleChange(e)}
                name="email"
                required
                placeholder="Email Address"
                className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            {/* phone */}
            <div>
              <label htmlFor="Phone" className="font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="Phone"
                value={user?.phone ?? ""}
                onChange={(e) => handleChange(e)}
                name="phone"
                required
                placeholder="+2349012312312"
                className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            {/* password */}
            <div>
              <label className="font-medium">Password</label>
              <div className="relative mt-2">
                <button
                  type="button"
                  title="Show/Hide Password"
                  className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                  onClick={() => setPasswordHidden(!isPasswordHidden)}
                >
                  {isPasswordHidden ? (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
                <input
                  type={isPasswordHidden ? "password" : "text"}
                  value={user?.password ?? ""}
                  onChange={(e) => handleChange(e)}
                  id="Password"
                  name="password"
                  required
                  placeholder="Password"
                  className="w-full pr-12 pl-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* re-enter password */}
            <div>
              <label htmlFor="ConfirmPassword" className="font-medium">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <button
                  type="button"
                  title="Show/Hide Password"
                  className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
                  onClick={() =>
                    setConfirmPasswordHidden(!isConfirmPasswordHidden)
                  }
                >
                  {isConfirmPasswordHidden ? (
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  )}
                </button>
                <input
                  type={isConfirmPasswordHidden ? "password" : "text"}
                  value={user?.confirmPassword ?? ""}
                  onChange={(e) => handleChange(e)}
                  id="ConfirmPassword"
                  name="confirmPassword"
                  required
                  placeholder="Re enter Password"
                  className="w-full pr-12 pl-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Gender and D.O.B */}
            <div className="flex gap-4 justify-between">
              <div className="flex-1">
                <label htmlFor="gender" className="font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  value={user?.gender ?? ""}
                  onChange={(e) => handleChange(e)}
                  name="gender"
                  className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="DOB" className="font-medium">
                  D.O.B
                </label>
                <input
                  type="date"
                  id="DOB"
                  value={user?.dob ?? ""}
                  onChange={(e) => handleChange(e)}
                  name="dob"
                  required
                  className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Residential Address */}
            <div>
              <label htmlFor="Address" className="font-medium">
                Residential Address
              </label>
              <input
                type="text"
                id="Address"
                value={user?.address ?? ""}
                onChange={(e) => handleChange(e)}
                name="address"
                required
                placeholder="Residential Address"
                className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            {/* Nearest Bus-Stop */}
            <div>
              <label htmlFor="BusStop" className="font-medium">
                Nearest Bus-Stop
              </label>
              <input
                type="text"
                id="BusStop"
                value={user?.busStop ?? ""}
                onChange={(e) => handleChange(e)}
                name="busStop"
                required
                placeholder="Nearest Bus-Stop"
                className="w-full mt-2 px-3 py-2 bg-white text-gray-500 bg-transparent outline-none border-none focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <button
              type="submit"
              onClick={onSubmit}
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              {loading ? (
                <>
                  <span className="flex place-content-center gap-2">
                    <LoadingOutlined
                      className="h-5 w-5 text-white"
                      style={{
                        fontSize: 24,
                      }}
                      spin
                    />
                    <span className="">Creating Account...</span>
                  </span>
                </>
              ) : (
                "Create account"
              )}
            </button>

            <div className="text-white">
              <p>
                By creating an account, you agree to Traffic Tracker’s{" "}
                <span className="text-[#EB5757] link link-hover font-semibold">
                  Condition of Use
                </span>{" "}
                and{" "}
                <span className="text-[#EB5757] link link-hover font-semibold">
                  Privacy Notice
                </span>
                .
              </p>
            </div>

            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white text-gray-400 px-2 absolute -top-2 inset-x-0 mx-auto">
                Or use
              </p>
            </div>

            <div className="flex gap-8 justify-center py-2">
              <button
                type="button"
                className="p-2.5 w-max border rounded-full hover:bg-gray-50 bg-gray-200 duration-150 active:bg-gray-100"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                type="button"
                className="p-2.5 w-max border rounded-full hover:bg-gray-50 bg-gray-200 duration-150 active:bg-gray-100"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937"
                    fill="#1DA1F2"
                  />
                </svg>
              </button>
            </div>

            {/* Display the Alerts component with error and success messages */}
            <Alerts
              errorMessages={errorMessages}
              successMessages={successMessages}
            />
            {/* Pass successMessages to Alerts component */}
          </form>
        </div>
        <div className="text-center">
          <a href="#" className="hover:text-indigo-600">
            Forgot password?
          </a>
        </div>
      </div>
    </main>
  );
};

export default Register;
