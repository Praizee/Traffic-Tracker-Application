import React from "react";
import TripItem from "../../Components/TripItem/TripItem";
const TripHistory = () => {
  return (
    <div className="md:p-8 p-3">
      <h2 className="text-3xl font-semibold mb-8 hidden md:flex md:mx-auto">Trip History</h2>
      <section className="max-w-screen-lg mx-auto py-6">
        <p className='text-[#011750] font-bold text-[18px]'>Dec 2023</p>
        <TripItem starColor='#4D5D85/20'/>
        <TripItem />
        <TripItem starColor='#4D5D85/20'/>
        <p className='text-[#011750] mt-16 font-bold text-[18px]'>Nov 2023</p>
        <TripItem starColor='#4D5D85/20'/>
        <TripItem />
        <TripItem starColor='#4D5D85/20'/>
        <TripItem />
        <TripItem />
        <TripItem starColor='#4D5D85/20'/>
        <TripItem starColor='#4D5D85/20'/>
      </section>
    </div>
  );
};

export default TripHistory;
