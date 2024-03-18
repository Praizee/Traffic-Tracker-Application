import React from "react";
import RoadClosure from "../../assets/Road Repair Section.png";
import RatingThumbs from "./RatingThumbs";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

const MoreForYou = () => {
  return (
    <section className="px-4">
      <div className="text-[#011750] flex flex-col gap-6">
        <p className="font-semibold text-base capitalize">more for you...</p>
        <span className="text-[#848484] flex flex-col gap-2 border-b-2 border-[#D49921] pb-3">
          <p className="text-[12px]">Today at 4:00pm</p>
          <p className="text-base font-medium">
            Road Construction at Surulere , Ojuelegba
          </p>
        </span>
        <span className="text-[#4D5D85] flex flex-col gap-2 border-b-2 border-[#D49921] pb-3">
          <p className="text-[12px]">Today at 4:00pm</p>
          <p className="text-base font-medium text-[#011750]">
            Road Construction at Surulere , Ojuelegba
          </p>
        </span>
        <span className="text-[#848484] flex flex-col gap-2 border-b-2 border-[#D49921] pb-3">
          <p className="text-[12px]">Today at 4:00pm</p>
          <p className="text-base font-medium">
            Road Construction at Surulere , Ojuelegba
          </p>
        </span>
        <span className="text-[#4D5D85] flex flex-col gap-2 border-b-2 border-[#D49921] pb-3">
          <p className="text-[12px]">Today at 4:00pm</p>
          <p className="text-base font-medium text-[#011750]">
            Road Construction at Surulere , Ojuelegba
          </p>
        </span>
        <span className="text-[#848484] flex flex-col gap-2 pb-3">
          <p className="text-[12px]">Today at 4:00pm</p>
          <p className="text-base font-medium">
            Road Construction at Surulere , Ojuelegba
          </p>
        </span>
      </div>
    </section>
  );
};

const ReportItem = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] max-w-screen-lg mx-auto grid lg:grid-cols-[70%_30%] grid-cols-1 gap-6 md:gap-12">
        <div className="flex flex-col gap-4">
          <div className="md:flex gap-4 justify-between space-y-4 md:space-y-0 border-b border-[#848484] pb-2">
            <div className="flex gap-3">
              <p className="text-[#27AE60] text-[14px] font-semibold">
                TOP NEWS
              </p>
              <div className="bg-black w-[3px] h-4 my-auto" />
              <p className="text-[#011750] text-[14px] font-semibold">
                Road Closure Alert
              </p>
            </div>
            <div className="flex gap-3 text-[#84848499]">
              <p className="text-[14px] font-semibold">RECENT NEWS</p>
              <div className="bg-[#84848499] w-[3px] h-4 my-auto" />
              <p className="text-[14px] font-semibold">RECOMMENDED FOR YOU</p>
            </div>
          </div>
          <h2 className="font-semibold text-[28px]">
            Road repair Ongoing at Ikoyi
          </h2>
          <h2 className="font-normal text-[20px] text-[#4D5D85B2] italic">
            In a significant development impacting local commuters, authorities
            have announced the temporary closure of a major roadway at Ikoyi.
          </h2>
          <img
            src={RoadClosure}
            alt="Road Closure"
            // width={120}
            // height={120}
            className="w-full"
            // lg:max-w-[628px]
          />

          {/* like, share etc */}
          <div className="md:flex gap-3 justify-between space-y-3 md:space-y-0">
            <div className="flex gap-3">
              <div className="bg-[#EB5757] w-[3px] h-[25px] my-auto" />
              <p className="text-[#4D5D85] text-[14px] my-auto">
                Today at 12:30pm
              </p>
            </div>
            <div className="flex gap-10">
              <RatingThumbs />
              <button type="button" title="Share">
                <IoShareSocialSharp className="w-6 h-6" />
              </button>
              <div className="bg-black w-[3px] h-[25px] my-auto" />
              <button type="button" title="Bookmark">
                <FaBookmark className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* text */}
          <div className="flex flex-col gap-2 text-[#4D5D85]">
            <p>
              The closure is set to take effect starting Friday and is expected
              to last for two weeks.
            </p>

            <p>
              The decision to close the road stems from potholes, such as
              ongoing construction, maintenance work, or emergency repairs.
              Officials are urging motorists to plan alternative routes and
              allow for extra travel time to avoid disruptions during the
              closure.
            </p>
            <p>
              Local law enforcement will be on-site to manage traffic diversions
              and ensure the safety of both drivers and construction crews.
              Detour signs and electronic message boards will be strategically
              placed to guide commuters around the affected area.
            </p>
            <p>
              Residents and businesses in the vicinity are advised to make
              necessary arrangements to accommodate the changes in traffic
              patterns during the specified period. Public transportation routes
              may also be affected, and passengers are encouraged to check for
              updates from relevant transportation authorities.
            </p>
            <p>
              Authorities emphasize the importance of adhering to traffic
              regulations and caution drivers to exercise patience and vigilance
              in the altered traffic conditions. Regular updates on the road
              closure will be provided through official channels, including
              social media platforms and local news outlets. This temporary road
              closure is part of ongoing efforts to enhance infrastructure and
              ensure the safety and efficiency of the transportation network.
              The cooperation of the community is essential to minimize
              disruptions and expedite the completion of the necessary work.
            </p>
            <p>
              Stay tuned to local news sources for real-time updates and
              additional information on the road closure. Drive safely, plan
              ahead, and cooperate with authorities to make this transition as
              smooth as possible for everyone affected.
            </p>
          </div>
        </div>

        {/* more for you */}
        <div className="">
          <MoreForYou />
        </div>
      </div>
    </section>
  );
};

export default ReportItem;
