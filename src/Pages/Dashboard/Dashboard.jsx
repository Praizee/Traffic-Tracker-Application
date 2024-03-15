import React from "react";
import Accident from "../../assets/png-clipart-traffic-collision-aviation-accidents-and-incidents-car-single-vehicle-accident-accident-angle-driving-thumbnail 2.png";
import LiveTraffic from "../../assets/rumman-amin-EMA-zTbqCVQ-unsplash 1.png";
import Weather from "../../assets/clear_day.png";
import Congestion from "../../assets/congestion.png";
import TrafficSpeed from "../../assets/Traffic Speed.png";

const Dashboard = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] max-w-screen-xl mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-16">
        {/* LiveTraffic */}
        <div className="md:hidden block">
          <img
            src={LiveTraffic}
            alt="Live Traffic"
            // width={120}
            // height={120}
            className="w-full"
          />
        </div>

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

        {/* LiveTraffic */}
        <div className="hidden md:block">
          <img
            src={LiveTraffic}
            alt="Live Traffic"
            // width={120}
            // height={120}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
