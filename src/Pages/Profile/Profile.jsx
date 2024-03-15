import React from "react";

const Profile = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-8">Profile</h2>
      <section className="max-w-screen-lg mx-auto p-4 border">
        <div className=" avatar">
          <div className="w-16 rounded-full avatar">
            <img
              alt="Avatar"
              title="Avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="ml-16">
          <span className="flex justify-between gap-6">
            <p className="text-[#B3B9CB] text-base">Phone:</p>
            <p className="text-[#011750] font-medium">+234123456789</p>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Profile;
