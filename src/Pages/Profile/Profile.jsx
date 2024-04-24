import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Man from "../../assets/pngwing.com.png";
import Woman from "../../assets/vecteezy_woman-face-expression-clipart-design-illustration_9397892.png";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  const { user } = useAppContext(); // Use the user state from the context
  const [creationDate, setCreationDate] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCreationDate(user.metadata.creationTime);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="md:p-8 p-3">
      <h2 className="text-3xl font-semibold mb-8">Profile</h2>
      <section className="max-w-screen-lg mx-auto py-6">
        <div className="relative flex flex-col md:flex-row items-center">
          <div className="w-16 rounded-full avatar md:mr-4">
            <img
              alt="Avatar"
              title="Avatar"
              src={user && user.gender === "Male" ? Man : Woman}
            />
          </div>

          <div className="flex flex-grow items-center justify-between gap-4 md:gap-0">
            <div className=" mt-4 text-center md:text-start">
              <p className="text-[#011750] text-base">
                {user && user.fullName ? user.fullName : "User"}
              </p>
              <p className="text-[#B3B9CB] text-sm">
                {/* Date Joined: 1st May, 2023 */}
                Date Joined: {creationDate ? creationDate : "Unknown"}
              </p>
            </div>
            <span className="hidden md:flex">
              <p className="text-[#EB5757] font-medium ">Edit</p>
            </span>
            <span className="absolute top-0 right-0 mt-1 mr-1 md:hidden">
              <MdEdit className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div className="space-y-4 pt-6 md:pl-20">
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">Phone:</p>
            <p className="text-[#011750] font-medium">
              {user && user.phone ? user.phone : "N/A"}
            </p>
          </span>
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">Email:</p>
            <p className="text-[#011750] font-medium">
              {user && user.email ? user.email : "N/A"}
            </p>
          </span>
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">Address:</p>
            <p className="text-[#011750] font-medium">
              {user && user.address ? user.address : "N/A"}
            </p>
          </span>
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">Gender:</p>
            <p className="text-[#011750] font-medium">
              {user && user.gender ? user.gender : "N/A"}
            </p>
          </span>
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">Nationality:</p>
            <p className="text-[#011750] font-medium">Nigerian</p>
          </span>
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">DOB:</p>
            <p className="text-[#011750] font-medium">
              {user && user.dob ? user.dob : "N/A"}
            </p>
          </span>
          <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
            <p className="text-[#B3B9CB] text-base">Nearest Bus Stop:</p>
            <p className="text-[#011750] font-medium">
              {user && user.bus_stop ? user.bus_stop : "N/A"}
            </p>
          </span>
        </div>
        <div className="pt-20 space-y-4 md:pl-20">
          <h2 className="text-xl font-semibold mb-8">Emergency</h2>
          <div className="space-y-4">
            <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
              <p className="text-[#B3B9CB] text-base">Name:</p>
              <p className="text-[#011750] font-medium">Lila Peters</p>
            </span>
            <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
              <p className="text-[#B3B9CB] text-base">Relationship:</p>
              <p className="text-[#011750] font-medium">Wife</p>
            </span>
            <span className="flex justify-between gap-6 border-b border-[#B3B9CB] pb-2">
              <p className="text-[#B3B9CB] text-base">Phone:</p>
              <p className="text-[#011750] font-medium">+234123456789</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
