import React from "react";
import Image from "next/image";

export default function StepCardContentOne() {
  return (
    <>
      <div className="flex items-center gap-20 md:gap-32 mt-12">
        <Image
          src={"/big-blur.svg"}
          alt="Blur"
          width={400}
          height={400}
          className="absolute rotate-180 left-[-180px] top-[110px] z-0"
        />

        <Image
          src={"/gradient-arrow.svg"}
          alt="Arrow"
          width={80}
          height={80}
          className=" ml-4"
        />
        <div className="flex flex-col items-center shadow-card py-2 lg:py-4 px-4 lg:px-5 mb-4 rounded-lg bg-[#232323]/20 -rotate-10 ">
          <h4 className="text-white font-montserrat text-xs lg:text-sm font-bold">
            Welcome to ClubHive
          </h4>
          <Image
            src={"/arrow.svg"}
            alt="Arrow"
            width={30}
            height={30}
            className="rotate-220 mt-2"
          />
          <button className=" bg-[#181818] text-[12px] lg:text-[14px] w-full shadow-inner-color rounded-lg py-1 bg-gradient-to-r from-[#ffffff] to-[#666688] text-transparent bg-clip-text font-montserrat font-bold text-lg mt-4">
            Get started
          </button>
        </div>
      </div>
    </>
  );
}
