import React from "react";
import Union from "../assets/Union.png";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";

const QuestionSection = () => {
  return (
    <>
      <div className="bg-[#E8EEE7] mx-10 mt-28 p-5 rounded-2xl grid grid-cols-2 w-full">
        <div>
          <div className="p-5 px-24 pt-10 flex flex-col gap-5">
            <p className="font-coveredByYourGrace font-normal text-[#9E9D9D] text-3xl">
              What’s on your mind
            </p>
            <h2 className="text-[#1C1C1C] font-manrope text-5xl font-semibold">
              Ask Questions
            </h2>
          </div>
          <img className="mt-10" src={Union} alt="draw" />
        </div>
        <div className="p-10 mt-24 flex flex-col gap-5">
          <div className="flex items-center justify-between px-10">
            <h3 className="font-semibold text-[#1C1C1C] text-2xl ">
              Do you offer freelancers?
            </h3>
            <MdAdd className="text-2xl" />
          </div>
          <hr className="mt-2 bg-[#D7D7D7] h-1 w-[90%] ml-8" />
          <div className="flex items-center justify-between px-10">
            <h3 className="font-semibold text-[#1C1C1C] text-2xl ">
              What’s the guarantee that I will be satisfied <br /> with the
              hired talent?
            </h3>
            <MdAdd className="text-2xl" />
          </div>
          <hr className="mt-2 bg-[#D7D7D7] h-1 w-[90%] ml-8" />
          <div className="flex flex-col px-10 gap-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#1C1C1C] text-2xl ">
                Can I hire multiple talents at once?
              </h3>
              <FaMinus className="text-2xl" />
            </div>
            <p className="text-[#617275] font-normal ">
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, <br />
              and refer to the agreement. Escalate to platform support if
              needed, considering mediation. Review policies, seek collaborative
              solutions for resolution.
            </p>
          </div>
          <hr className="mt-2 bg-[#D7D7D7] h-1 w-[90%] ml-8" />
          <div className="flex items-center justify-between px-10">
            <h3 className="font-semibold text-[#1C1C1C] text-2xl ">
            Why should I not go to an agency directly?
            </h3>
            <MdAdd className="text-2xl" />
          </div>
          <hr className="mt-2 bg-[#D7D7D7] h-1 w-[90%] ml-8" />
          <div className="flex items-center justify-between px-10">
            <h3 className="font-semibold text-[#1C1C1C] text-2xl ">
            Who can help me pick a right skillset <br />and duration for me?
            </h3>
            <MdAdd className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
