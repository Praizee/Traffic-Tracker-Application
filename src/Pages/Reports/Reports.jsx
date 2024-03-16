import React from "react";
import RoadClosure from "../../assets/Road Repair Section.png";
import CarAccident from "../../assets/Car Accident Section.png";
import CarAccident2 from "../../assets/Car Accident Section2.png";
import OngoingWork from "../../assets/Ongoing Work Section.png";
import OngoingWork2 from "../../assets/7ee3f446dfe13c5de5d85524e7b1b056.png";
import SurulereCarAccident from "../../assets/Surulere Car Accident Section.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Reports = () => {
  return (
    <section className="md:p-8 p-4 flex flex-col gap-12">
      <div className="text-[#011750] max-w-screen-xl mx-auto grid lg:grid-cols-7 grid-cols-1 gap-6 md:gap-12">
        {/* top news */}
        <div className="lg:col-span-5">
          <div className="border-b pb-2 mb-6 flex gap-4 justify-between">
            <p className="text-[14px] font-semibold text-[#011750] flex gap-2 my-auto">
              TOP NEWS
              <FaArrowRightLong className="w-5 h-5" />
            </p>
            {/* filter */}
            <select
              name="HeadlineAct"
              id="HeadlineAct"
              className="mt-1.5 px-4 w-max h-full lg:hidden rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            >
              <option value="Most Popular">Most popular</option>
              <option value="All">All</option>
              <option value="Accidents">Accidents</option>
              <option value="Road Closure">Road Closure</option>
              <option value="Others">Others</option>
            </select>
            <div className="lg:flex gap-3 hidden">
              <button
                type="button"
                className="text-[#B3B9CB] border border-[#B3B9CB] px-4 py-1 rounded-md"
              >
                Most Popular
              </button>
              <button
                type="button"
                className="text-white bg-[#011750] px-4 py-1 rounded-md"
              >
                All
              </button>
              <button
                type="button"
                className="text-[#B3B9CB] border border-[#B3B9CB] px-4 py-1 rounded-md"
              >
                Accidents
              </button>
              <button
                type="button"
                className="text-[#B3B9CB] border border-[#B3B9CB] px-4 py-1 rounded-md"
              >
                Road Closure
              </button>
              <button
                type="button"
                className="text-[#B3B9CB] border border-[#B3B9CB] px-4 py-1 rounded-md"
              >
                Others
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              <Link to="report-item" className="relative">
                <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
                  <p className="text-white bg-[#011750] py-4 px-8 text-[14px] font-medium w-max">
                    Road Closure
                  </p>
                </span>
                <img
                  src={RoadClosure}
                  alt="Road Closure"
                  // width={120}
                  // height={120}
                  className="w-full lg:min-w-[302px]"
                />
              </Link>
              <div className="space-y-2">
                <p className="text-[#4D5D85] text-[11px]">Today at 12:30pm</p>
                <p className="uppercase text-[#011750] text-base font-semibold">
                  Road repair currently at Ikoyi
                </p>
                <p className="text-[13px] text-[#4D5D85] font-normal">
                  In response to longstanding concerns over deteriorating road
                  conditions, local authorities have announced an ambitious road
                  repair initiative aimed at addressing infrastructure
                  challenges and improving commuter safety across the region.
                </p>
                <button
                  type="button"
                  title="Read More"
                  className="text-[#D49921] text-[13px] font-semibold "
                >
                  Read More
                </button>
              </div>
            </div>
            {/* others */}
            <div className="flex flex-col justify-between gap-4">
              <Link to="report-item" className="flex gap-3">
                <img
                  src={SurulereCarAccident}
                  alt="Road Closure"
                  // width={120}
                  // height={120}
                  className="w-full lg:max-w-[140px] max-w-[125px]"
                />
                <span className="flex flex-col gap-2 justify-center">
                  <p className="text-[#4D5D85] text-[11px]">Today at 4:00pm</p>
                  <p className="uppercase text-[#011750] text-[13px] font-semibold">
                    Road Construction at Surulere , Ojuelegba
                  </p>
                </span>
              </Link>
              <Link to="report-item" className="flex gap-3">
                <img
                  src={OngoingWork}
                  alt="Road Closure"
                  // width={120}
                  // height={120}
                  className="w-full lg:max-w-[140px] max-w-[125px]"
                />
                <span className="flex flex-col gap-2 justify-center">
                  <p className="text-[#4D5D85] text-[11px]">Today at 12:30pm</p>
                  <p className="uppercase text-[#011750] text-[13px] font-semibold">
                    Ongoing work along Opebi Rd
                  </p>
                </span>
              </Link>
              <Link to="report-item" className="flex gap-3">
                <img
                  src={CarAccident}
                  alt="Road Closure"
                  // width={120}
                  // height={120}
                  className="w-full lg:max-w-[140px] max-w-[125px]"
                />
                <span className="flex flex-col gap-2 justify-center">
                  <p className="text-[#4D5D85] text-[11px]">Today at 1:30pm</p>
                  <p className="uppercase text-[#011750] text-[13px] font-semibold">
                    Car accident at Onipanu Bus-Stop, Ikorodu rd.
                  </p>
                </span>
              </Link>
              <Link to="report-item" className="flex gap-3">
                <img
                  src={SurulereCarAccident}
                  alt="Road Closure"
                  // width={120}
                  // height={120}
                  className="w-full lg:max-w-[140px] max-w-[125px]"
                />
                <span className="flex flex-col gap-2 justify-center">
                  <p className="text-[#4D5D85] text-[11px]">Today at 4:00pm</p>
                  <p className="uppercase text-[#011750] text-[13px] font-semibold">
                    Road Construction at Surulere , Ojuelegba
                  </p>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* recent news */}
        <div className="lg:col-span-2">
          <div className="border-b pb-2 mb-6">
            <p className="text-[14px] font-semibold text-[#011750] flex gap-2">
              RECENT NEWS
              <FaArrowRightLong className="w-5 h-5" />
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex gap-3">
              <img
                src={SurulereCarAccident}
                alt="Road Closure"
                // width={120}
                // height={120}
                className="w-full lg:max-w-[140px] max-w-[125px]"
              />
              <span className="flex flex-col gap-2 justify-center">
                <p className="text-[#4D5D85] text-[11px]">Today at 4:00pm</p>
                <p className="uppercase text-[#011750] text-[13px] font-semibold">
                  Road Construction at Surulere , Ojuelegba
                </p>
              </span>
            </div>
            <div className="flex gap-3">
              <img
                src={OngoingWork}
                alt="Road Closure"
                // width={120}
                // height={120}
                className="w-full lg:max-w-[140px] max-w-[125px]"
              />
              <span className="flex flex-col gap-2 justify-center">
                <p className="text-[#4D5D85] text-[11px]">Today at 12:30pm</p>
                <p className="uppercase text-[#011750] text-[13px] font-semibold">
                  Ongoing work along Opebi Rd
                </p>
              </span>
            </div>
            <div className="flex gap-3">
              <img
                src={CarAccident}
                alt="Road Closure"
                // width={120}
                // height={120}
                className="w-full lg:max-w-[140px] max-w-[125px]"
              />
              <span className="flex flex-col gap-2 justify-center">
                <p className="text-[#4D5D85] text-[11px]">Today at 1:30pm</p>
                <p className="uppercase text-[#011750] text-[13px] font-semibold">
                  Car accident at Onipanu Bus-Stop, Ikorodu rd.
                </p>
              </span>
            </div>
            <div className="flex gap-3">
              <img
                src={SurulereCarAccident}
                alt="Road Closure"
                // width={120}
                // height={120}
                className="w-full lg:max-w-[140px] max-w-[125px]"
              />
              <span className="flex flex-col gap-2 justify-center">
                <p className="text-[#4D5D85] text-[11px]">Today at 4:00pm</p>
                <p className="uppercase text-[#011750] text-[13px] font-semibold">
                  Road Construction at Surulere , Ojuelegba
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* recommended */}
      <div className="space-y-4 md:space-y-0">
        <div className="border-b pb-2 mb-6 flex gap-4 justify-between">
          <p className="text-[14px] uppercase font-semibold text-[#011750] flex gap-2 my-auto">
            recommended FOR YOU
            <FaArrowRightLong className="w-5 h-5" />
          </p>
          <div className="">
            <button
              type="button"
              className="text-[#EB5757] border border-[#EB5757] px-4 py-1 rounded-md hidden md:flex gap-2"
            >
              <span className="font-semibold text-base">+</span> Add Report
            </button>
          </div>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative">
            <img
              src={RoadClosure}
              alt="Road Closure"
              // width={120}
              // height={120}
              className="w-full lg:max-w-[375px] lg:max-h-[250px]"
            />
            {/* overlay */}
            <div className="absolute inset-0 backdrop-brightness-50" />
            {/* end of overlay */}
            <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
              <p className="text-white bg-[#011750] py-4 px-8 text-[14px] font-medium w-max">
                Road Closure
              </p>
            </span>
            <div className="flex justify-center">
              <div className="absolute bottom-10 flex flex-col gap-2 text-white">
                <p className="uppercase text-base font-semibold">
                  Ongoing work along Opebi Rd
                </p>
                <div className="flex gap-2">
                  <div className="w-1 h-12 bg-[#EB5757] rounded-md" />
                  <span className="flex flex-col gap-1">
                    <p className="text-[11px]">
                      by <span className="font-semibold">Giwa Adams</span>
                    </p>
                    <p className="text-[10.5px]">Today at 12:30pm</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={OngoingWork2}
              alt="Road Closure"
              // width={120}
              // height={120}
              className="w-full lg:max-w-[375px] lg:max-h-[250px]"
            />
            {/* overlay */}
            <div className="absolute inset-0 backdrop-brightness-50" />
            {/* end of overlay */}
            <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
              <p className="text-white bg-[#011750] py-4 px-8 text-[14px] font-medium w-max">
                Road Closure
              </p>
            </span>
            <div className="flex justify-center">
              <div className="absolute bottom-10 flex flex-col gap-2 text-white">
                <p className="uppercase text-base font-semibold">
                  Ongoing work along Opebi Rd
                </p>
                <div className="flex gap-2">
                  <div className="w-1 h-12 bg-[#EB5757] rounded-md" />
                  <span className="flex flex-col gap-1">
                    <p className="text-[11px]">
                      by <span className="font-semibold">Giwa Adams</span>
                    </p>
                    <p className="text-[10.5px]">Today at 12:30pm</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={CarAccident2}
              alt="Road Closure"
              // width={120}
              // height={120}
              className="w-full lg:max-w-[375px] lg:max-h-[250px]"
            />
            {/* overlay */}
            <div className="absolute inset-0 backdrop-brightness-50" />
            {/* end of overlay */}
            <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
              <p className="text-white bg-[#011750] py-4 px-8 text-[14px] font-medium w-max">
                Road Closure
              </p>
            </span>
            <div className="flex justify-center">
              <div className="absolute bottom-10 flex flex-col gap-2 text-white">
                <p className="uppercase text-base font-semibold">
                  Ongoing work along Opebi Rd
                </p>
                <div className="flex gap-2">
                  <div className="w-1 h-12 bg-[#EB5757] rounded-md" />
                  <span className="flex flex-col gap-1">
                    <p className="text-[11px]">
                      by <span className="font-semibold">Giwa Adams</span>
                    </p>
                    <p className="text-[10.5px]">Today at 12:30pm</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="text-[#EB5757] border border-[#EB5757] px-4 py-1 rounded-md flex gap-2 md:hidden"
          >
            <span className="font-semibold text-base">+</span> Add Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reports;
