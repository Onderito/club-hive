import React from "react";
import Image from "next/image";

export default function StepCardContentTwo() {
  return (
    <>
      <div className="shadow-sm shadow-[#585BFF] rounded-xl pt-4 pb-14 mt-8 bg-[#26263B]/45 ">
        <div className="flex items-center justify-center gap-2">
          <Image src={"/coach-alex.svg"} alt="Blur" width={35} height={35} />
          <h4 className="text-white font-montserrat font-bold">Coach Alex</h4>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <button className="text-white/30 shadow-inner-both p-1 px-2 rounded-xl">
            player name or email adress
          </button>
          <button className="text-white font-montserrat shadow-sm shadow-[#585BFF] p-1 bg-[#181818] rounded-lg text-sm">
            Add
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3">
          <button className="text-white/30 shadow-inner-both p-1 px-2 rounded-xl">
            player name or email adress
          </button>
          <button className="text-white font-montserrat shadow-sm shadow-[#585BFF] p-1 bg-[#181818] rounded-lg text-sm">
            Add
          </button>
        </div>
        <button className="absolute text-white text-[12px] md:text-[14px] font-montserrat font-bold text-lg mt-4 -rotate-6 bg-[#181818] shadow-inner-color rounded-lg py-1 px-6 right-[120px] bottom-3 ">
          Send invitation
        </button>
      </div>
    </>
  );
}
