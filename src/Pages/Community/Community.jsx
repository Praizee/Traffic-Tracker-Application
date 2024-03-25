/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MdEdit, MdCampaign } from "react-icons/md";
import { IoMdThumbsUp, IoMdSend } from "react-icons/io";
import { LuReply } from "react-icons/lu";

const Community = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="font-semibold text-3xl">Community</h2>
        <div className="text-[#01175059] mx-auto grid lg:grid-cols-[55%_45%] grid-cols-1 gap-6 md:gap-12 mt-8">
          <div>
            <div className="avatar-group -space-x-5 lg:hidden">
              <div className="avatar online bg-transparent ">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar online">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar online">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar ">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar online">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-[#8484841A]/10 text-[#4D5D85]">
                  <span>34+</span>
                </div>
              </div>
            </div>

            <div className="flex border-y-[0.5px] justify-between gap-3 py-3 items-center">
              <span className="text-[#EB5757] bg-trasparent rounded-md">
                <MdCampaign className="w-8 h-8" />
              </span>
              <p className="text-[#011750] border border-[#0117501A]/10 text-center">
                Who knows what's happening at Maryland/Ikeja Axis???
              </p>
              <span className="text-[#011750] bg-[#0117501A]/10 rounded-md">
                <MdEdit className="w-8 h-8 p-1" />
              </span>
            </div>

            <div>
              <p className="text-[#27AE60] border-b py-6">
                Questions and comments
              </p>
              <div className="pt-6">
                <div className="flex gap-3">
                  <div className=" w-[50px]">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full"
                    />
                  </div>
                  <div className="border-b pb-6 border-[#848484] text-[#848484] max-w-[300px]">
                    <span className="flex gap-3">
                      <h3 className="text-[#011750] font-semibold">
                        Tade Igninola
                      </h3>
                      <p>2 mins ago</p>
                    </span>
                    <p>
                      Many believe that there should be stricter enforcement of
                      traffic laws and regulations to deter reckless driving.
                      This includes increased police presence, the use of
                      technology such as speed cameras, and harsher penalties
                      for those found guilty of reckless behavior.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span>
                        <IoMdThumbsUp className="w-5 h-5" />
                      </span>
                      <span>
                        <LuReply className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex gap-3">
                  <div className="w-[50px]">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full"
                    />
                  </div>
                  <div className="border-b pb-6 border-[#848484] text-[#848484] max-w-[300px]">
                    <span className="flex gap-3">
                      <h3 className="text-[#011750] font-semibold">
                        Tolu Ijoko
                      </h3>
                      <p>2 mins ago</p>
                    </span>
                    <p>
                      Reckless driving reflects a lack of responsibility and
                      consideration for the safety of oneself and others on the
                      road.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span>
                        <IoMdThumbsUp className="w-5 h-5" />
                      </span>
                      <span>
                        <LuReply className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex gap-3">
                  <div className="w-[50px]">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full "
                    />
                  </div>
                  <div className="border-b pb-6 border-[#848484] text-[#848484] max-w-[300px]">
                    <span className="flex gap-3">
                      <h3 className="text-[#011750] font-semibold">
                        Tunde Monday
                      </h3>
                      <p>2 mins ago</p>
                    </span>
                    <p>I think the news covered what happened.</p>
                    <div className="flex gap-3 mt-3">
                      <span>
                        <IoMdThumbsUp className="w-5 h-5" />
                      </span>
                      <span>
                        <LuReply className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex gap-3">
                  <div className="w-[50px]">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full "
                    />
                  </div>
                  <div className="border-b pb-6 border-[#848484] text-[#848484] max-w-[300px]">
                    <span className="flex gap-3">
                      <h3 className="text-[#011750] font-semibold">Me</h3>
                      <p>Now</p>
                    </span>
                    <p>I think the news covered what happened.</p>
                    <div className="flex gap-3 mt-3">
                      <span>
                        <IoMdThumbsUp className="w-5 h-5" />
                      </span>
                      <span>
                        <LuReply className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex gap-3">
                  <div className="w-[50px]">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      className="rounded-full "
                    />
                  </div>
                  <div className="border-b pb-6 border-[#848484] text-[#848484] max-w-[300px]">
                    <span className="flex gap-3">
                      <h3 className="text-[#011750] font-semibold">
                        Tade Igninola
                      </h3>
                      <p>2 mins ago</p>
                    </span>
                    <p>
                      Reckless driving reflects a lack of responsibility and
                      consideration for the safety of oneself and others on the
                      road.
                    </p>
                    <div className="flex gap-3 mt-3">
                      <span>
                        <IoMdThumbsUp className="w-5 h-5" />
                      </span>
                      <span>
                        <LuReply className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="sr-only">Write a comment</label>
                <div className="relative mt-6">
                  <button
                    type="button"
                    className="text-[#011750] absolute right-3 inset-y-0 my-auto"
                  >
                    <IoMdSend className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Write a comment"
                    required
                    className="w-full pl-3 py-4 bg-white text-[#4D5D85] outline-none border border-[#4D5D85] shadow-sm rounded-md text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden max-w-[25rem] lg:flex lg:flex-col pl-4 ">
            <h2 className="text-[#011750] font-semibold inline-flex mr-2">
              Participants <p className="text-[#27AE60]">34+</p>
            </h2>
            <div className="flex gap-3 flex-wrap my-6">
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
              <div className="w-[50px]">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="rounded-full "
                />
              </div>
            </div>

            <div className="text-[#848484]">
              <span className="flex items-center mb-4">
                <h2 className="text-[#011750] font-semibold ">Active </h2>
                <span className="w-3 h-3 bg-[#27AE60] rounded-full ml-2"></span>
              </span>
              <span className="space-y-2">
                <p>Tolu Ijoko</p>
                <p>Tade Igbinola</p>
                <p>Sade Adu</p>
                <p>Isaac Johnson</p>
                <p>Tunde Monday</p>
                <p>Dara Ij</p>
                <p>Bosun Ijeoma</p>
                <p>Osaru Akhi</p>
                <p>Ahmed Nuhu</p>
                <p>Sunday Monday</p>
                <p>Alaba Kenny</p>
                <p>Muhammad Oluwola</p>
                <p>Demola Abike</p>
                <p>Peter John</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
