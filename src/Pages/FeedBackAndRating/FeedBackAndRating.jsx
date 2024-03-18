import React from "react";

const FeedBackAndRating = () => {
  return (
    <section className="md:p-8 p-4 space-y-8">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-semibold text-[24px]">FeedBack And Ratings</h2>
        <div className="text-[#01175059] mx-auto grid lg:grid-cols-[55%_45%] grid-cols-1 gap-6 md:gap-12 mt-8">
          <div className="text-[#01175059] flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <p className="text-base text-[#4D5D85] font-semibold">
                We appreciate your feedback
              </p>
              <p className="text-[14px] max-w-sm">
                We are always looking for ways to improve your experience.
                Please take a moment to evaluate and tell Us what you think.
              </p>

              <div className="">
                <p className="text-3xl">[Star Rating]</p>
              </div>
            </div>
            <span className="flex flex-col gap-2">
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
