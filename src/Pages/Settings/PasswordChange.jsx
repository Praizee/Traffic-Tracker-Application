import React, { useState } from "react";

const PasswordChange = () => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
  return (
    <section className="md:p-8 p-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-semibold text-xl md:text-3xl mb-8">
          Change password
        </h2>
        <form>
          {/* Current Password */}
          <div>
            <label className="sr-only">Current Password</label>
            <input
              type="text"
              placeholder="Current Password"
              className="w-full pl-3 py-4 bg-white text-[#67749680]/50 outline-none border border-[#848484] focus:border-indigo-600 shadow-sm rounded-md text-sm"
            />
          </div>
          {/* New Password */}
          <div>
            <label className="sr-only">New Password</label>
            <div className="relative mt-6">
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
                placeholder="New Password"
                className="w-full pl-3 py-4 bg-white text-[#67749680]/50 outline-none border border-[#848484] focus:border-indigo-600 shadow-sm rounded-md text-sm"
              />
            </div>
          </div>
          {/* Re Enter Password */}
          <div>
            <label className="sr-only">Re Enter Password</label>
            <div className="relative mt-6">
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
                placeholder="Re enter New Password"
                className="w-full pl-3 py-4 bg-white text-[#67749680]/50 outline-none border border-[#848484] focus:border-indigo-600 shadow-sm rounded-md text-sm"
              />
            </div>
          </div>
          {/* Cancel and Set New Password buttons */}
          <div className="mt-4 font-semibold gap-4 md:flex">
            <div className="text-[#011750] p-3 bg-[#4D5D851A]/10 md:bg-white mr-4">
              Cancel
            </div>
            <div className="text-white p-3 bg-[#002A97] rounded-md">
              Set New Password
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PasswordChange;
