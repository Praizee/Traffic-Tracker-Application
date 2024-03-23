import React from "react";
import { FaStar } from "react-icons/fa";
import { Rate } from "antd";

const FeedBackAndRating = () => {
  return (
    <section className="md:p-8 p-4 space-y-8">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-semibold text-2xl hidden md:flex text-[#011750]">
          FeedBack And Ratings
        </h2>
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

              <div className="flex justify-center sm:justify-normal gap-1 text-[#4D5D8533]/20">
                <Rate allowHalf defaultValue={3.5} className="text-[#D49921]" />
              </div>
            </div>

            {/* General user rating mobile view */}
            <div className="lg:hidden">
              <div className="flex justify-between  border-b border-[#84848499]/60 pb-4">
                <span className="space-y-2">
                  <h2 className="text-[#4D5D85] font-semibold">
                    General User Rating
                  </h2>
                  <Rate disabled defaultValue={4} className="text-[#D49921]" />

                  <p className=" text-[12px]">
                    <p className="text-[#4D5D85] text-[12px] mr-2">4.0</p>
                    (27 Reviews)
                  </p>
                </span>

                <span className=" text-[#4D5D85] text-[12px]">
                  <span className="flex gap-2 items-center">
                    <p>5</p>
                    <div className="text-[#D49921]">
                      <FaStar />
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-14 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>4</p>
                    <div className="text-[#D49921]">
                      <FaStar />
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-11 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>3</p>
                    <div className="text-[#D49921]">
                      <FaStar />
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-6 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>2</p>
                    <div className="text-[#D49921]">
                      <FaStar />
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-5 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                  <span className="flex gap-2 items-center">
                    <p>1</p>
                    <div className="text-[#D49921]">
                      <FaStar />
                    </div>
                    <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                      <div className=" w-3 h-[4px] bg-[#D49921] rounded-lg"></div>
                    </div>
                  </span>
                </span>
              </div>

              {/* User Review */}

              <div className="bg-[#F4F5F7] rounded-md p-4 my-6 flex flex-col gap-2">
                <p className="text-[12px]">
                  added by{" "}
                  <span className="text-[#4D5D85] text-[12px]">Dele Akin</span>{" "}
                  on 06/11/2023
                </p>
                <p className="text-[#4D5D85]">Satisfactory</p>
                <div className="flex gap-4">
                  <Rate disabled defaultValue={4} className="text-[#D49921]" />
                  <p className="text-[#4D5D85]">4 Stars</p>
                </div>
                <p>
                  Traffic Tracker offers a wide range of metrics, including
                  audience demographics, acquisition sources, user behavior, and
                  more. Its user-friendly interface and powerful reporting make
                  it a top choice for many businesses.
                </p>
                <a href="#" className="text-[#002A97]">
                  more
                </a>
              </div>
            </div>

            {/* Review Options */}
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

            {/* Form for submitting feedback */}

            <div className="text-[#67749680]/50">
              <span>
                <label className="sr-only">Review Title</label>
                <input
                  type="text"
                  placeholder="review title"
                  required
                  className="w-full border-[0.5px] border-[#011750] rounded-md mb-6 py-3 pl-4 outline-none"
                />
              </span>
              <span>
                <label className="sr-only">type in your review</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  placeholder="type in your review here..."
                  required
                  className="w-full rounded-md border-[0.5px] mb-6 border-[#011750] py-3 pl-4 outline-none"
                ></textarea>
              </span>
              <button
                type="submit"
                className="w-full bg-[#002A97] text-white py-2 pl-4 rounded-md"
              >
                Submit My feedback
              </button>
            </div>
          </div>

          {/* General user rating desktop view */}
          <div className="hidden max-w-[25rem] lg:flex lg:flex-col border-l border-[#4D5D85] pl-4 ">
            <div className="flex justify-between">
              <span className="space-y-2">
                <h2 className="text-[#4D5D85] font-semibold">
                  General User Rating
                </h2>
                <Rate disabled defaultValue={4} className="text-[#D49921]" />
                <p className=" text-[12px]">
                  <span className="text-[#4D5D85] text-[12px] mr-2">4.0</span>
                  (27 Reviews)
                </p>
              </span>

              <span className=" text-[#4D5D85] text-[12px]">
                <span className="flex gap-2 items-center">
                  <p>5</p>
                  <div className="text-[#D49921]">
                    <FaStar />
                  </div>
                  <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                    <div className=" w-14 h-[4px] bg-[#D49921] rounded-lg"></div>
                  </div>
                  <p>9</p>
                </span>
                <span className="flex gap-2 items-center">
                  <p>4</p>
                  <div className="text-[#D49921]">
                    <FaStar />
                  </div>
                  <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                    <div className=" w-11 h-[4px] bg-[#D49921] rounded-lg"></div>
                  </div>
                  <p>5</p>
                </span>
                <span className="flex gap-2 items-center">
                  <p>3</p>
                  <div className="text-[#D49921]">
                    <FaStar />
                  </div>
                  <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                    <div className=" w-8 h-[4px] bg-[#D49921] rounded-lg"></div>
                  </div>
                  <p>7</p>
                </span>
                <span className="flex gap-2 items-center">
                  <p>2</p>
                  <div className="text-[#D49921]">
                    <FaStar />
                  </div>
                  <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                    <div className=" w-5 h-[4px] bg-[#D49921] rounded-lg"></div>
                  </div>
                  <p>3</p>
                </span>
                <span className="flex gap-2 items-center">
                  <p>1</p>
                  <div className="text-[#D49921]">
                    <FaStar />
                  </div>
                  <div className=" w-20 h-[4px] bg-[#4D5D85]/20 rounded-lg">
                    <div className=" w-3 h-[4px] bg-[#D49921] rounded-lg"></div>
                  </div>
                  <p>3</p>
                </span>
              </span>
            </div>

            {/* User Reviews */}

            <div className="flex gap-4 my-6">
              <div className=" h-10 w-44 rounded-full ">
                <img
                  className="rounded-full"
                  alt="Avatar"
                  title="Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12px]">
                  added by{" "}
                  <span className="text-[#4D5D85] text-[12px]">Dele Akin</span>{" "}
                  on 06/11/2023
                </p>
                <p className="text-[#4D5D85]">Satisfactory</p>
                <div className="flex gap-4">
                  <Rate disabled defaultValue={4} className="text-[#D49921]" />
                  <p className="text-[#4D5D85]">4 Stars</p>
                </div>
                <p>
                  Traffic Tracker offers a wide range of metrics, including
                  audience demographics, acquisition sources, user behavior, and
                  more. Its user-friendly interface and powerful reporting make
                  it a top choice for many businesses.
                </p>
              </div>
            </div>

            <div className="flex gap-4 my-6">
              <div className=" h-10 w-44 rounded-full ">
                <img
                  className="rounded-full"
                  alt="Avatar"
                  title="Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[12px]">
                  added by{" "}
                  <span className="text-[#4D5D85] text-[12px]">Boba Jude</span>{" "}
                  on 06/11/2023
                </p>
                <p className="text-[#4D5D85]">User friendly</p>
                <div className="flex gap-4">
                  <Rate disabled defaultValue={4} className="text-[#D49921]" />
                  <p className="text-[#4D5D85]">4 Stars</p>
                </div>
                <p>
                  {" "}
                  It offers data on website traffic, referral sources, keyword
                  analysis, and audience demographics. Its interface is
                  user-friendly and provides a comprehensive overview of web
                  traffic.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className=" bg-transparent text-[#4D5D85] border border-[#4D5D85] rounded-3xl py-2 px-4 pl-4"
              >
                Load more reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBackAndRating;
