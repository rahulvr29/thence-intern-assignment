import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="p-10 m-10 rounded-3xl bg-[#F5F5F5] text-black ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 font-semibold">
            <MdOutlineCopyright />
            <p className="text-[#1C1C1C]">Talup 2023. All rights reserved</p>
          </div>
          <div className="">
            <nav>
              <ul className="flex items-center justify-center gap-5">
                <li className="font-semibold font-manrope underline">Terms & Conditions</li>
                <li className="font-semibold font-manrope underline">Privacy Policy</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
