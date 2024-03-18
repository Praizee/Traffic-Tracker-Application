import React, { useState } from "react";
import Map from "../../assets/map.png";
import TripNavigation from "../../assets/svg/TripNavigation";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";

const StartTrip = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] lg:max-w-screen-lg lg:mx-auto flex flex-col gap-6">
        <div className="relative">
          <img
            src={Map}
            alt="Map"
            // width={120}
            // height={120}
            className="lg:w-full md:max-w-full max-w-[360px]"
            // lg:w-[655px]
          />
          <span className="absolute top-0 text-[#011750] bg-[#F5F8FF]">
            <p className="text-white bg-[#011750] py-4 px-8 text-[18px] font-medium w-max flex gap-4">
              <FaArrowTrendUp className="w-6 h-6" />
              Ojuelegba, Surulere
            </p>
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#848484] font-medium">
          <div className="sm:flex gap-8 justify-between lg:justify-normal sm:space-y-2 md:space-y-0">
            <span className="flex flex-col gap-2">
              <span className="flex gap-2">
                <p>Travel Time</p>
                <p className="text-[#27AE60]">15 min</p>
              </span>
              <span className="flex gap-2">
                <p>ETA</p>
                <p className="text-[#27AE60]">12:30 PM</p>
              </span>
              <span className="flex gap-2">
                <p>Distance</p>
                <p className="">8.9 km</p>
              </span>
            </span>

            <span className="flex flex-col gap-2">
              <span className="flex gap-2">
                <p>Incidents</p>
                <p className="text-[#27AE60]">0</p>
              </span>
              <span className="flex gap-2">
                <p>Congestion</p>
                <p className="text-[#EB5757]">55%</p>
              </span>
              <span className="flex gap-2">
                <p>Traffic Speed</p>
                <p className="">60 km </p>
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-end">
            <div className="flex gap-4 flex-col lg:flex-row lg:justify-end bottom-0">
              <button
                type="button"
                className="border border-[#848484] px-4 py-3 rounded-md h-max"
              >
                Alternate Route
              </button>
              <button className="text-white px-4 py-3 rounded-md bg-[#EB5757] h-max">
                Exit Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Trip = () => {
  const [tripStarted, setTripStarted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add any necessary logic here, like setting tripStarted to true
    setTripStarted(true);
  };

  if (tripStarted) {
    return <StartTrip />;
  }

  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] lg:max-w-screen-lg w-max mx-auto grid lg:grid-cols-[30%_70%] grid-cols-1 gap-6 md:gap-12">
        <div className="flex gap-4 justify-between lg:h-max items-center w-max mx-auto">
          <TripNavigation />

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Location"
              className="border border-[#84848480] p-3 w-full text-[#84848466] text-base rounded-md bg-blue-100/30"
              required
            />
            <input
              type="text"
              placeholder="Destination"
              className="border border-[#84848480] p-3 w-full text-[#84848466] text-base rounded-md bg-blue-100/30"
              required
            />
            <button
              type="submit"
              className="bg-[#002A97] text-white p-3 rounded-lg"
            >
              Start Trip
            </button>
          </form>

          <HiMiniArrowsUpDown className="w-8 h-8" />
        </div>

        <div className="w-max">
          <img
            src={Map}
            alt="Map"
            // width={120}
            // height={120}
            className="max-w-[350px] lg:max-w-[665px]"
            // lg:w-[655px]
          />
        </div>
      </div>
    </section>
  );
};

export default Trip;
