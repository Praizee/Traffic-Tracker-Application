import React from "react";
import { FaCarSide, FaStar } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const TripItem = ({ starColor = "#4D5D85" }) => {
  return (
    <div className="mt-6 flex flex-col gap-2 md:flex-row">
      <span className=" border-b border-[#B3B9CB] pb-4 md:flex items-center gap-8">
        <div className="">
          <span className="flex gap-4 items-center">
            <span className="flex gap-2">
              <span className="bg-[#B3B9CB]/20 rounded-full w-6 h-6 text-[#4D5D85] flex justify-center items-center">
                <FaCarSide />
              </span>
              <p className="text-[#4D5D85] font-bold text-[14px]">Lagos State Teaching...</p>
            </span>
            <span className="flex gap-2">
              <span className="text-[#4D5D85] ">
                <MdTrendingUp />
              </span>
              <p className="text-[#4D5D85] font-bold text-[14px]">Maryland Mall, Maryland...</p>
            </span>
          </span>
          <span>
            <p className="text-[#848484] text-[11px] ">2nd Dec, 11:20AM, 15km, 15mins TT</p>
          </span>
        </div>
        <div className="flex gap-4 mt-3">
          <button className="text-[#4D5D85] border border-[#B3B9CB] font-bold hover:text-[#011750] rounded py-2 px-6 flex-grow text-[12px]">
            Repeat Trip
          </button>
          <button className="text-[#4D5D85]/20 border border-[#B3B9CB] md:border-0 font-bold hover:text-[#011750] rounded py-2 px-4">
            <FaStar color={starColor} />
          </button>
        </div>
      </span>
    </div>
  );
};

export default TripItem;
