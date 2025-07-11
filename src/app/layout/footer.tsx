import React from "react";
import Image from "next/image";
import Card from "../ui/card";

export default function Footer() {
  return (
    <>
      <div className="shadow-simple-inner rounded-lg mt-12 lg:mt-16 xl:mt-32 relative overflow-hidden z-20 mb-10">
        <div className="relative z-10 flex flex-col items-center justify-center mt-2 mb-2 p-6 md:p-8 lg:p-10 xl:p-20">
          <h2 className="text-white font-montserrat font-semibold text-[20px] md:text-[24px] xl:text-[32px] ">
            ClubHive
          </h2>
          <p className="text-white text-center text-[16px] xl:text-[20px] font-montserrat font-regular mt-2">
            Join our newsletter and stay updated with the latest features and
            offers.
          </p>
          <div className="relative flex items-center gap-4 mt-4 md:mt-6">
            <input
              placeholder="Enter your email"
              className="text-white border-[0.1px] border-white rounded-lg p-1.5 xl:p-2 focus:outline-none xl:w-80 "
              type="text"
            />
            <button className="text-white text-[16px] font-shantell bg-[#585BFF] p-1.5 xl:p-2 rounded-lg cursor-pointer hover:bg-[#666688] transition-colors duration-300">
              Join us
            </button>
            <Image
              src={"/arrow-footer.svg"}
              alt="Arrow"
              width={70}
              height={70}
              className="absolute top-0 right-[-60px] lg:w-[110px] xl:w-[150px] lg:right-[-90px] xl:right-[-130px] "
            />
          </div>
        </div>
        <Image
          src={"/shape.svg"}
          alt="Shape"
          width={120}
          height={70}
          className=" hidden lg:block absolute bottom-[-20px] right-[-20px] lg:w-[90px]"
        />
        <Image
          src={"/shape.svg"}
          alt="Shape"
          width={220}
          height={90}
          className="hidden lg:block absolute bottom-[-20px] right-[-20px] lg:w-[180px]"
        />
      </div>
    </>
  );
}
