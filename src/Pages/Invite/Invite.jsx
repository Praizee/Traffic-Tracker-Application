import React, { useState } from "react";
import Typing from "../../assets/bro.png";
import Frontcar from "../../assets/cuate.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import FacebookIcon from "../../assets/devicon_facebook.png";
import WhatsappIcon from "../../assets/logos_whatsapp-icon.png";
import TwitterIcon from "../../assets/ri_twitter-x-line.png";

const Invite = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const link = "https://www.traffictracker.com";
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true); // Set copied state to true on successful copy
        // Reset copied state after a few seconds
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((error) => {
        // Error handling
        console.error("Failed to copy link:", error);
      });
  };

  return (
    <>
      {copied && (
        <div className="absolute bottom-0 p-4 bg-green-500 w-full">
          <span className="text-white text-xl">Link copied to clipboard!</span>
        </div>
      )}
      <section className="md:p-8 p-4">
        <div className="text-[#011750] max-w-xl mx-auto space-y-12 text-center">
          <span>
            <h2 className=" font-semibold text-lg md:text-3xl mb-2">
              Let Your Family & Friends Beat Traffic
            </h2>
            <p className="text-[#B3B9CB] mb-4">
              Invite your Family & Friends to sign up and beat the Traffic
            </p>
          </span>
          <div className="flex justify-between items-center">
            <span>
              <img
                src={Typing}
                alt="Typing Illustration"
                className="bg-[#E6E8EE80] rounded-full pt-12 px-2"
              />
            </span>
            <span className="text-[#011750] ">
              <FaLongArrowAltRight className="w-6 h-6" />
            </span>
            <span>
              <img
                src={Frontcar}
                alt=""
                className="bg-[#E6E8EE80] rounded-full pt-12 px-2"
              />
            </span>
          </div>
          <div className="flex rounded-3xl pl-6 shadow-md bg-[#01175026]/15 items-center text-[12px] justify-between">
            <h2 className=" text-[#67749680] text-base">
              https://www.traffictracker.com
            </h2>
            <button
              type="button"
              className="bg-[#011750] py-3 px-4 rounded-e-3xl text-white text-base"
              onClick={handleCopyLink}
            >
              Copy Link
            </button>
          </div>
          <div className=" w-44 mx-auto">
            <p className="text-[12px] md:text-lg mb-4 text-[#011750]">
              Share by using;
            </p>
            <div className="flex justify-between">
              <span className="bg-[#F2F3F6] p-2 rounded-md">
                <img src={FacebookIcon} alt="" />
              </span>
              <span className="bg-[#F2F3F6] p-2 rounded-md">
                <img src={TwitterIcon} alt="" />
              </span>
              <span className="bg-[#F2F3F6] p-2 rounded-md">
                <img src={WhatsappIcon} alt="" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Invite;
