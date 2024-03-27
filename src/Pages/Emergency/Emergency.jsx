import React from "react";
import Ambulance from "../../assets/Ambulance.png";
import FFS from "../../assets/FFS.png";
import Contact from "../../assets/flat-icons_contacts.png";
import FRSC from "../../assets/FRSC.png";
import Lastma from "../../assets/LASTMA.png";
import NigeriaPoliceLogo from "../../assets/Nigeria_Police_logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoNavigate } from "react-icons/io5";

const Emergency = () => {
  return (
    <section className="md:p-8 p-4">
      <div className="text-[#011750] max-w-screen-xl mx-auto">
        {/* Mobile screen */}
        <div className="max-w-screen-lg mx-auto space-y-3 lg:hidden">
          {/* Emergency Contact*/}
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold flex gap-5 bg-[#6774961A]/10 items-center">
              <span className="bg-white p-2">
                <img src={Contact} alt="contact-icon" />
              </span>
              <p>Emergency Contact</p>
            </div>
            <div className="collapse-content bg-[#E5EDFF] rounded-md p-4">
              <div className="space-y-4 border-b border-[#84848433]/20 p-4 text-[#848484]">
                <span className="flex gap-4 items-center">
                  <BsFillPersonFill />
                  <p className="text-[#4D5D85]">Lila Peters</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdCall />
                  <p className="text-[#4D5D85]">+2341234567890</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdMail />
                  <p className="text-[#4D5D85]">Iyanaoworofrsc@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoNavigate />
                  <p className="text-[#4D5D85]">
                    2 Valley view Lane, Oworo Bus-stop
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* Ambulance */}
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold flex gap-5 bg-[#6774961A]/10 items-center">
              <span className="bg-white p-2">
                <img src={Ambulance} alt="Ambulance-icon" />
              </span>
              <p>Ambulance</p>
            </div>
            <div className="collapse-content bg-[#E5EDFF] rounded-md p-4">
              <div className="space-y-4 border-b border-[#84848433]/20 p-4 text-[#848484]">
                <span className="flex gap-4 items-center">
                  <IoMdCall />
                  <p className="text-[#4D5D85]">+2341234567890</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdMail />
                  <p className="text-[#4D5D85]">Iyanaoworofrsc@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoNavigate />
                  <p className="text-[#4D5D85]">
                    2 Valley view Lane, Oworo Bus-stop
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* Police */}
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold flex gap-5 bg-[#6774961A]/10 items-center">
              <span className="bg-white p-2">
                <img src={NigeriaPoliceLogo} alt="Nigeria Police Logo" />
              </span>
              <p>POLICE</p>
            </div>
            <div className="collapse-content bg-[#E5EDFF] rounded-md p-4">
              <div className="space-y-4 border-b border-[#84848433]/20 p-4 text-[#848484]">
                <span className="flex gap-4 items-center">
                  <IoMdCall />
                  <p className="text-[#4D5D85]">+2341234567890</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdMail />
                  <p className="text-[#4D5D85]">Iyanaoworofrsc@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoNavigate />
                  <p className="text-[#4D5D85]">
                    2 Valley view Lane, Oworo Bus-stop
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* FRSC */}
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold flex gap-5 bg-[#6774961A]/10 items-center">
              <span className="bg-white p-2">
                <img src={FRSC} alt="Federal Road Safety Corps Logo" />
              </span>
              <p>FRSC</p>
            </div>
            <div className="collapse-content bg-[#E5EDFF] rounded-md p-4">
              <div className="space-y-4 border-b border-[#84848433]/20 p-4 text-[#848484]">
                <span className="flex gap-4 items-center">
                  <IoMdCall />
                  <p className="text-[#4D5D85]">+2341234567890</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdMail />
                  <p className="text-[#4D5D85]">Iyanaoworofrsc@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoNavigate />
                  <p className="text-[#4D5D85]">
                    2 Valley view Lane, Oworo Bus-stop
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* Lastma */}
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold flex gap-5 bg-[#6774961A]/10 items-center">
              <span className="bg-white p-2">
                <img src={Lastma} alt="Lastma Logo" />
              </span>
              <p>LASTMA</p>
            </div>
            <div className="collapse-content bg-[#E5EDFF] rounded-md p-4">
              <div className="space-y-4 border-b border-[#84848433]/20 p-4 text-[#848484]">
                <span className="flex gap-4 items-center">
                  <IoMdCall />
                  <p className="text-[#4D5D85]">+2341234567890</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdMail />
                  <p className="text-[#4D5D85]">Iyanaoworofrsc@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoNavigate />
                  <p className="text-[#4D5D85]">
                    2 Valley view Lane, Oworo Bus-stop
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* FFS */}
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-semibold flex gap-5 bg-[#6774961A]/10 items-center">
              <span className="bg-white p-2">
                <img src={FFS} alt="FFS Logo" />
              </span>
              <p>FFS</p>
            </div>
            <div className="collapse-content bg-[#E5EDFF] rounded-md p-4">
              <div className="space-y-4 border-b border-[#84848433]/20 p-4 text-[#848484]">
                <span className="flex gap-4 items-center">
                  <IoMdCall />
                  <p className="text-[#4D5D85]">+2341234567890</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoMdMail />
                  <p className="text-[#4D5D85]">Iyanaoworofrsc@gmail.com</p>
                </span>
                <span className="flex gap-4 items-center">
                  <IoNavigate />
                  <p className="text-[#4D5D85]">
                    2 Valley view Lane, Oworo Bus-stop
                  </p>
                </span>
              </div>
            </div>
          </div>

          {/* SOS Button */}
          <div className="bg-[#EB5757] rounded-md py-2 px-4 w-full mt-8 text-center text-white">
            SOS
          </div>
        </div>

        {/* Desktop Screen */}
        <div className="max-w-screen-lg mx-auto mt-16 space-y-3 bg-[#F5F8FF] border border-[#B3B9CB] p-4 hidden  lg:flex">
          <div role="tablist" className="tabs p-10">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#848484] font-semibold border-r-2 border-r-black uppercase focus:text-[#011750] pl-10 text-nowrap"
              aria-label="Emergency Contact"
            />
            <div role="tabpanel" className="tab-content p-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#011750] text-lg font-semibold">
                    Emergency Contact
                  </p>
                  <p className="text-[#EB5757] bg-[#FBD7D7] py-2 px-3 rounded-md">
                    SOS
                  </p>
                </div>
                <div className="flex justify-between text-white bg-[#011750] p-2">
                  <p>Name</p>
                  <p>Address</p>
                  <p>Email address</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex gap-8 text-[#848484]">
                  <p>Lila Peters</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#848484] font-semibold border-r-2 border-r-black uppercase focus:text-[#011750] px-8 text-nowrap"
              aria-label="Ambulance"
              checked
            />
            <div role="tabpanel" className="tab-content p-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#011750] text-lg font-semibold">
                    Ambulance Nearby
                  </p>
                  <p className="text-[#EB5757] bg-[#FBD7D7] py-2 px-3 rounded-md">
                    SOS
                  </p>
                </div>
                <div className="flex justify-between text-white bg-[#011750] p-2">
                  <p>Location</p>
                  <p>Address</p>
                  <p>Email address</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#848484] font-semibold border-r-2 border-r-black uppercase focus:text-[#011750] px-8 text-nowrap"
              aria-label="Police station"
            />
            <div role="tabpanel" className="tab-content p-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#011750] text-lg font-semibold">
                    Police Station
                  </p>
                  <p className="text-[#EB5757] bg-[#FBD7D7] py-2 px-3 rounded-md">
                    SOS
                  </p>
                </div>
                <div className="flex justify-between text-white bg-[#011750] p-2">
                  <p>Location</p>
                  <p>Address</p>
                  <p>Email address</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#848484] font-semibold border-r-2 border-r-black uppercase focus:text-[#011750] px-8 text-nowrap"
              aria-label="frsc"
            />
            <div role="tabpanel" className="tab-content p-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#011750] text-lg font-semibold">
                    Federal Road Safety Corps
                  </p>
                  <p className="text-[#EB5757] bg-[#FBD7D7] py-2 px-3 rounded-md">
                    SOS
                  </p>
                </div>
                <div className="flex justify-between text-white bg-[#011750] p-2">
                  <p>Location</p>
                  <p>Address</p>
                  <p>Email address</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#848484] font-semibold border-r-2 border-r-black uppercase focus:text-[#011750] px-8 text-nowrap"
              aria-label="lastma"
            />
            <div role="tabpanel" className="tab-content p-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#011750] text-lg font-semibold">
                    Lagos State Traffic Management Authority
                  </p>
                  <p className="text-[#EB5757] bg-[#FBD7D7] py-2 px-3 rounded-md">
                    SOS
                  </p>
                </div>
                <div className="flex justify-between text-white bg-[#011750] p-2">
                  <p>Location</p>
                  <p>Address</p>
                  <p>Email address</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#848484] font-semibold uppercase focus:text-[#011750] px-8 text-nowrap"
              aria-label="ffs"
            />
            <div role="tabpanel" className="tab-content p-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-[#011750] text-lg font-semibold">
                    Federal Fire Service
                  </p>
                  <p className="text-[#EB5757] bg-[#FBD7D7] py-2 px-3 rounded-md">
                    SOS
                  </p>
                </div>
                <div className="flex justify-between text-white bg-[#011750] p-2">
                  <p>Location</p>
                  <p>Address</p>
                  <p>Email address</p>
                  <p>Phone Number</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
                <div className="flex justify-between gap-8 text-[#848484] border-b pb-4 border-[#84848433]/20">
                  <p>Iyana Oworo</p>
                  <p>2 Valley view Lane, Oworo Bus-stop</p>
                  <p>Iyanaoworofrsc@gmail.com</p>
                  <p>+2341234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
