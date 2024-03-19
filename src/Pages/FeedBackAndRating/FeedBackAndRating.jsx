import React from "react";

const FeedBackAndRating = () => {
  return (
    <section className="md:p-8 p-4 space-y-8">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-semibold text-[24px] hidden md:flex">FeedBack And Ratings</h2>
        <div className="text-[#01175059] mx-auto grid lg:grid-cols-[55%_45%] grid-cols-1 gap-6 md:gap-12 mt-8">
          <div className="text-[#01175059] flex flex-col gap-5">
            <div className="flex flex-col gap-2 border-b border-[#84848499]/60 pb-4 md:border-0">
              <p className="text-base text-[#4D5D85] font-semibold">
                We appreciate your feedback
              </p>
              <p className="text-[14px] max-w-sm">
                We are always looking for ways to improve your experience.
                Please take a moment to evaluate and tell Us what you think.
              </p>

              <div className="hidden md:flex">
                <p className="text-3xl">[Star Rating]</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between  border-b border-[#84848499]/60 pb-4">
                <span>
                  <h2 className="text-[#4D5D85] font-semibold">General User Rating</h2>
                  <span className="flex gap-2">
                    <span>s</span>
                    <span>s</span>
                    <span>s</span>
                    <span>s</span>
                    <span>s</span>
                  </span>
                  <p className=" text-[12px]"><span className="text-[#4D5D85] text-[12px] mr-2">4.0</span>(27 Reviews)</p>
                </span>

                <span className=" text-[#4D5D85] text-[12px]">
                  <span className="flex gap-2 items-center">
                    <p>5</p>
                    <div>
                      s
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-14 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>4</p>
                    <div>
                      s
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-11 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>3</p>
                    <div>
                      s
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-8 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>2</p>
                    <div>
                      s
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-5 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>5</p>
                    <div>
                      s
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-3 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                </span>
              </div>

              <div className="bg-[#F4F5F7] rounded-md p-4 my-6">
                <p className="text-[12px]">added by <span className="text-[#4D5D85] text-[12px]">Dele Akin</span> on 06/11/2023</p>
                <p className="text-[#4D5D85]">Satisfactory</p>
                <div className="flex gap-4">
                  <span className="flex gap-2">
                    <p>s</p>
                    <p>s</p>
                    <p>s</p>
                    <p>s</p>
                    <p>s</p>
                  </span>
                  <p className="text-[#4D5D85]">4 Stars</p>
                </div>
                <p>Traffic Tracker offers a wide range of metrics, including audience demographics, acquisition sources, user behavior, and more. Its user-friendly interface and powerful reporting make it a top choice for many businesses.</p>
                <a href="#" className="text-[#002A97]">more</a>
              </div>
            </div>
            <span className="flex flex-col gap-2  border-t border-[#84848499]/60 pt-4 md:border-0">
              <p className="text-base text-[#4D5D85] font-semibold">
                Tell Us what can be improved
              </p>
              <span className="flex flex-wrap gap-3 max-w-[430px]">
                <button
                  type="button"
                  className="bg-[#B3B9CB26] rounded-full text-[#4D5D85] py-3 px-6"
                >
                  Overall Service
                </button>
                <button
                  type="button"
                  className="bg-[#B3B9CB26] rounded-full text-[#4D5D85] py-3 px-6"
                >
                  Real Time Update
                </button>
                <button
                  type="button"
                  className="bg-[#B3B9CB26] rounded-full text-[#4D5D85] py-3 px-6"
                >
                  Speed and Efficiency
                </button>
                <button
                  type="button"
                  className="bg-[#B3B9CB26] rounded-full text-[#4D5D85] py-3 px-6"
                >
                  Traffic Update
                </button>
                <button
                  type="button"
                  className="bg-[#B3B9CB26] rounded-full text-[#4D5D85] py-3 px-6"
                >
                  Map Accuracy
                </button>
                <button
                  type="button"
                  className="bg-[#B3B9CB26] rounded-full text-[#4D5D85] py-3 px-6"
                >
                  Respondents Efficiency
                </button>
              </span>
            </span>
            <div className="text-[#67749680]/50">
              <span>
                <label className="sr-only">Refer Title</label>
                <input type="text" placeholder="Refer Title" className="w-full border-[0.5px] border-[#011750] rounded-md mb-6 py-2 pl-4"/>
              </span>
              <span>
                <label className="sr-only">Type in your review</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Type in your review here..." className="w-full rounded-md border-[0.5px] border-[#011750] py-2 pl-4"></textarea>
              </span>
              <button className="w-full bg-[#002A97] text-white py-2 pl-4 rounded-md">Submit My feedback</button>
            </div>
          </div>
          <div>
            <p className="text-[#4D5D85] text-base">General User Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeedBackAndRating;
