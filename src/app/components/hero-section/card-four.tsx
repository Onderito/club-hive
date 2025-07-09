import React from "react";
import Image from "next/image";
import Card from "@/app/ui/card";

export default function CardFour() {
  return (
    <>
      <Card className="relative">
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-white text-center font-montserrat font-bold text-[20px]">
            Rapid FC vs Mérignac
          </h2>
          <div className="grid grid-cols-3 gap-2 mt-4 items-center">
            <p className="text-white text-center font-shantell">55%</p>
            <h3 className="text-[#909090] text-center font-montserrat">
              Possession
            </h3>
            <p className="text-white text-center font-shantell">45%</p>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 items-center">
            <p className="text-white text-center font-shantell">12</p>
            <h3 className="text-[#909090] text-center font-montserrat">
              Shots
            </h3>
            <p className="text-white text-center font-shantell">4</p>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 items-center border-b border-[#333333] pb-4">
            <p className="text-white text-center font-shantell">455</p>
            <h3 className="text-[#909090] text-center font-montserrat">Pass</h3>
            <p className="text-white text-center font-shantell">200</p>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4 items-center font-shantell font-bold text-[28px] ">
            <p className="text-white text-center">4</p>
            <div className="flex justify-center">
              <div className="w-8 h-px bg-[#333333]" />
            </div>
            <p className="text-white text-center">1</p>
          </div>
        </div>
        <div className="flex justify-center items-center border border-white bg-[#181818] px-2 py-1 gap-3 rounded-xl w-fit absolute top-[-15px] -rotate-6 left-0">
          <Image src="/on-stream.svg" alt="On Stream" width={25} height={25} />
          <p className="text-white font-extralight">Live</p>
        </div>
      </Card>
    </>
  );
}
