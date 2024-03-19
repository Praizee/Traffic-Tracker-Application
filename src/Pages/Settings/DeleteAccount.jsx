import React from "react";
import Warning from "../../assets/warning.png";

const DeleteAccount = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="max-w-md mx-auto space-y-8 text-[#011750] text-center md:flex flex-col items-center">
        <div>
          <span className="mb-4 flex flex-col items-center ">
            <img src={Warning} alt="" />
          </span>
          <span>
            <h2 className="font-semibold mb-2 md:text-2xl">
              Delete User Account
            </h2>
            <p className="text-[#848484] text-[12px] md:text-base">
              Deleting your Account will remove all your information from our
              database. this Action cannot be undone.
            </p>
          </span>
        </div>
        <div className="md:flex items-center gap-4">
          <div className="p-3 px-8 bg-white rounded-md border-[0.5px] border-[#848484] mb-4 md:mb-0 md:font-semibold">
            Cancel
          </div>
          <div className="bg-[#EB5757] text-white p-3 rounded-md border-[0.5px] border-[#848484] md:font-semibold">
            Delete Account
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeleteAccount;
