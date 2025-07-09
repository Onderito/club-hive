import React from "react";
import Image from "next/image";

export default function StepCardContentThree() {
  return (
    <>
      <div className="border-1 border-white  rounded-lg mt-8">
        <h4 className="text-white font-montserrat border-b border-white font-bold pb-2 p-2">
          Latest Alerts
        </h4>
        <div className="flex flex-col gap-4 p-2 text-white font-montserrat mt-4 mb-12">
          <p className=" border-1 border-[#FFB77F] w-fit p-2 rounded-lg bg-[#FFB77F]/10">
            Game rescheduled to 7 PM!
          </p>
          <p className=" border-1 border-[#FF7D7D] w-fit p-2 rounded-lg bg-[#FF7D7D]/10">
            Training cancelled due to rain
          </p>
        </div>
        <button className="absolute text-white text-[12px] md:text-[14px] lg:text-[16px] font-montserrat font-bold text-lg mt-4 rotate-6 bg-[#181818] shadow-inner-color rounded-lg py-1 md:py-2 px-6 left-0 bottom-3 ">
          Hi Coach Alex ! How are you ?
        </button>
      </div>
    </>
  );
}
