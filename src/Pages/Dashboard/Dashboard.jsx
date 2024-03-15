import React from "react";
import { Link } from "react-router-dom";
import Accident from "../../assets/png-clipart-traffic-collision-aviation-accidents-and-incidents-car-single-vehicle-accident-accident-angle-driving-thumbnail 2.png";
import LiveTraffic from "../../assets/rumman-amin-EMA-zTbqCVQ-unsplash 1.png";
import Weather from "../../assets/clear_day.png";
import Congestion from "../../assets/congestion.png";
import TrafficSpeed from "../../assets/Traffic Speed.png";
import RoadBlock from "../../assets/ben-wicks-zwN1MwCtR5Y-unsplash 1.png";
import { TiLocationArrowOutline } from "react-icons/ti";
import { FaRegMap } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 md:gap-16">
        {/* LiveTraffic */}
        <div className="md:hidden block">
          <div className="relative">
            <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
              <button className="py-4 px-8 text-[14px] font-semibold w-max flex gap-1">
                <TiLocationArrowOutline className="w-6 h-6" />
                Live Traffic at Obalende
              </button>
            </span>
            <img
              src={LiveTraffic}
              alt="Live Traffic"
              // width={120}
              // height={120}
              className="w-full"
            />
            <span className="flex justify-center items-center mx-auto">
              <button className="py-4 px-8 text-[14px] font-semibold w-max flex gap-3 rounded-md text-[#011750] bg-[#F5F8FF] absolute bottom-8 md:bottom-16">
                <FaRegMap className="w-6 h-6" />
                Satellite Map
              </button>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-max">
            <div className="bg-[#F5F8FF] flex gap-2 justify-between p-4 rounded-md">
              <span className="flex gap-2 h-max my-auto">
                <img
                  src={Accident}
                  alt="Accidents"
                  // width={20}
                  // height={20}
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[14px] font-medium">Accidents Reported</p>
              </span>
              <p className="text-[#D01307] font-semibold text-[20px]">32</p>
            </div>
            <div className="bg-[#F5F8FF] flex gap-2 justify-between p-4 rounded-md">
              <span className="flex gap-2 h-max my-auto">
                <img
                  src={Weather}
                  alt="Weather"
                  // width={20}
                  // height={20}
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[14px] font-medium">Weather</p>
              </span>
              <p className="text-[#E83B05] font-semibold text-[20px]">34 °C</p>
            </div>
            <div className="bg-[#F5F8FF] flex gap-2 justify-between p-4 rounded-md">
              <span className="flex gap-2 h-max my-auto">
                <img
                  src={TrafficSpeed}
                  alt="Traffic Speed"
                  // width={20}
                  // height={20}
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[14px] font-medium">Traffic Speed</p>
              </span>
              <p className="text-[#0C8A01] font-semibold text-[20px]">85</p>
            </div>
            <div className="bg-[#F5F8FF] flex gap-2 justify-between p-4 rounded-md">
              <span className="flex gap-2 h-max my-auto">
                <img
                  src={Congestion}
                  alt="Congestion"
                  // width={20}
                  // height={20}
                  className="w-[20px] h-[20px]"
                />
                <p className="text-[14px] font-medium">Congestion level</p>
              </span>
              <p className="text-[#D49921] font-semibold text-[20px]">15%</p>
            </div>
          </div>
          {/* latest updates */}
          <div className="border border-[#848484] min-h-[240px] w-full">
            <span className="">
              <p className="text-white bg-[#011750] py-4 px-8 text-[14px] font-medium w-max">
                LATEST UPDATES
              </p>
            </span>
            <div className="pt-6 md:pl-6 pr-6 md:pr-0 pb-6 md:pb-0 md:flex gap-4">
              <img
                src={RoadBlock}
                alt="Road Block"
                // width={120}
                // height={120}
                className="max-w-[190px] md:hidden mb-2"
              />
              <span className="space-y-2">
                <p className="text-[#4D5D85] text-[14px] md:max-w-[213px] font-medium pl-3 md:pl-0">
                  Road Block at Sapele Express Junction at 12:30pm
                </p>
                <p className="text-[#848484] text-[12px] font-normal pl-3 md:pl-0">
                  Local residents expressed frustration and inconvenience due to
                  the unexpected road block, with some taking to social media
                  platforms to share updates and vent about the situation.
                </p>
                <button
                  type="button"
                  title="See more"
                  className="text-[12px] text-[#4D5D85] font-semibold pl-3 md:pl-0"
                >
                  See more
                </button>
              </span>
              <img
                src={RoadBlock}
                alt="Road Block"
                // width={120}
                // height={120}
                className="w-full hidden md:inline-block"
              />
            </div>
          </div>
          {/* Nearest Emergency Location */}
          <div className="border border-[#848484] min-h-[240px] w-full">
            <span className="">
              <p className="text-white bg-[#011750] py-4 px-8 text-[14px] font-medium w-max">
                NEAREST EMERGENCY LOCATION
              </p>
            </span>
            <div className="pt-6 pl-6 pb-6 pr-6 flex flex-col gap-3">
              <Link
                to=""
                className="text-[#4D5D85] text-[14px] font-medium lg:w-max"
              >
                Police Station
              </Link>
              <Link
                to=""
                className="text-[#4D5D85] text-[14px] font-medium lg:w-max"
              >
                Ambulance
              </Link>
              <Link
                to=""
                className="text-[#4D5D85] text-[14px] font-medium lg:w-max"
              >
                Federal Road Safety Corps (FRSC)
              </Link>
              <Link
                to=""
                className="text-[#4D5D85] text-[14px] font-medium lg:w-max"
              >
                Lagos State Traffic Management Authority (LASTMA)
              </Link>
              <Link
                to=""
                className="text-[#4D5D85] text-[14px] font-medium lg:w-max"
              >
                Federal Fire Service
              </Link>
            </div>
          </div>
        </div>

        {/* LiveTraffic */}
        <div className="hidden md:block">
          <div className="relative">
            <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
              <button className="py-4 px-8 text-[14px] font-semibold w-max flex gap-1">
                <TiLocationArrowOutline className="w-6 h-6" />
                Live Traffic at Obalende
              </button>
            </span>
            <img
              src={LiveTraffic}
              alt="Live Traffic"
              // width={120}
              // height={120}
              className="w-full"
            />
            <span className="flex justify-center items-center mx-auto">
              <button className="py-4 px-8 text-[14px] font-semibold w-max flex gap-3 rounded-md text-[#011750] bg-[#F5F8FF] absolute bottom-16">
                <FaRegMap className="w-6 h-6" />
                Satellite Map
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
