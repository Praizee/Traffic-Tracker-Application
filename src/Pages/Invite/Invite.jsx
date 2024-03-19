import React from "react";
import Typing from "../../assets/bro.png";
import Frontcar from "../../assets/cuate.png";
import { FaLongArrowAltRight, FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Invite = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] max-w-xl mx-auto space-y-12 text-center">
        <span>
          <h2 className=" font-semibold text-lg md:text-3xl mb-2">
            Let Your Family & Friends Beat Traffic
          </h2>
          <p className="text-[#B3B9CB] mb-4">
            Invite your Family & Friends to sign up and beat the Traffic
          </p>
        </span>
        <div className="flex justify-between items-center">
          <span>
            <img
              src={Typing}
              alt=""
              className="bg-[#E6E8EE80] rounded-full pt-12 px-2"
            />
          </span>
          <span className="text-[#011750]">
            <FaLongArrowAltRight />
          </span>
          <span>
            <img
              src={Frontcar}
              alt=""
              className="bg-[#E6E8EE80] rounded-full pt-12 px-2"
            />
          </span>
        </div>
        <div className="flex rounded-3xl pl-3 shadow-md bg-[#01175026]/15 items-center text-[12px] justify-between">
          <h2 className=" text-[#67749680]">https://www.traffictracker.com</h2>
          <div className="bg-[#011750] py-3 px-4 rounded-e-3xl text-white">
            Copy Link
          </div>
        </div>
        <div className=" w-40 mx-auto">
          <p className="text-[12px] md:text-lg mb-4 text-[#011750]">
            Share by using;
          </p>
          <div className="flex justify-between">
            <span className="bg-[#F2F3F6] px-2 rounded-md">
              <FaFacebookF />
            </span>
            <span className="bg-[#F2F3F6] px-2 rounded-md">
              <BsTwitterX />
            </span>
            <span className="bg-[#F2F3F6] px-2 rounded-md">W</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invite;
