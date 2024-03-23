import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const Settings = () => {
  return (
    <section className="md:p-8 p-4">
      {/* <div className="text-[#011750] max-w-screen-xl mx-auto grid lg:grid-cols-7 grid-cols-1 gap-6 md:gap-12"> */}
      <div className="max-w-2xl mx-auto">
        <h2 className="font-semibold text-xl md:text-3xl mb-4">Settings</h2>
        <div className="space-y-4 md:space-y-6">
          <Link
            to="change-password"
            className="flex items-center justify-between border-b border-[#B3B9CB] pb-2 text-[#B3B9CB] text-sm"
          >
            <span className="flex items-center gap-2">
              <span>
                <BsFillShieldLockFill />
              </span>
              <p>Change Password</p>
            </span>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </Link>
          <Link
            to="delete-account"
            className="flex items-center gap-2 text-[#EB5757] text-sm"
          >
            <span>
              <RiDeleteBin6Fill />
            </span>
            <p>Delete Account</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Settings;
