import React from 'react';
import { MdFileUpload, MdOutlineArrowDropDown  } from "react-icons/md";
import Illustrationmessaging from '../../assets/Illustration-man messaging.png';

const ReportHappening = () => {
  return (
    <div className="md:p-8 p-3 max-w-screen-lg mx-auto md:flex">
      <div className='hidden md:flex'>
        <img src={Illustrationmessaging} alt="Illustrationmessaging" />
      </div>
      <div className='space-y-8'>
        <span className='space-y-2'>
          <h3 className='text-[#011750] font-semibold text-xl'>What are you reporting?</h3>
          <p className='text-[#848484] text-[11px]'>Help Us improve and keep the community Updated on Real Time Updates</p>
        </span>
        <form className='space-y-6 text-[#67749680]/50 '>
          <div>
            <label htmlFor="report-options" className='sr-only'>Report options</label>
            <div className="border rounded-md flex items-center justify-between px-6 py-2 ">
              <select name="report-options" id="report-options" className=' flex outline-none appearance-none text-[12px]'>
                <option value="traffic-update">Traffic Update</option>
                <option value="traffic-update">Traffic Update</option>
              </select>
              <div className="pointer-events-none">
                <MdOutlineArrowDropDown  className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="location-report" className='sr-only'>Location Report</label>
            <input type="text" name="" id="location-report" placeholder='Tell Us the Location' className='w-full border rounded-md flex px-6 py-2 outline-none text-[12px]'/>
          </div>
          <div>
            <label htmlFor="report-description" className='sr-only'>Report Description</label>
            <input type="text" name="" id="report-description" placeholder='Add Description to help the Community' className='w-full border rounded-md flex px-6 py-6 outline-none text-[12px]'/>
          </div>
          <div className='text-[#67749680] border border-dashed rounded-full py-4 px-8 flex flex-col items-center text-[12px]'>
            <label htmlFor="file-upload" className="sr-only">File Upload</label>
            <MdFileUpload className="h-6 w-6 text-gray-400" />
            <input type="file" name="" id="file-upload" className='outline-none opacity-0 absolute'/>
            <p>Drag or Choose file to Upload</p>
          </div>
          <div>
            <button className='bg-[#002A97] border border-[#848484] rounded-md px-10 py-2 text-white text-[12px]'>Submit Report</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReportHappening;
