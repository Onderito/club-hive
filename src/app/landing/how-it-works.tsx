import React from "react";
import Image from "next/image";
import Card from "../ui/card";

const stepCards = [
  {
    title: "Set Up Your Club in Minutes",
    number: "1",
    descripion:
      "Quickly create your club profile, add essential details, and customize your settings to get started without delay.",
  },
  {
    title: "Invite Your Team & Staff",
    number: "2",
    descripion:
      "Easily invite coaches, players, and parents to join your club's private space. They'll get instant access to all communications and schedules.",
  },
  {
    title: "Instant Team Updates",
    number: "3",
    descripion:
      "Receive instant updates and send messages to keep everyone informed and perfectly coordinated, on and off the pitch.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <h2 className="text-white text-center text-[24px] font-montserrat font-bold mt-12 ">
        How It{" "}
        <span className="bg-gradient-to-r from-[#D0D0D0] to-[#393939] text-transparent bg-clip-text">
          Works ?
        </span>
      </h2>
      <p className="text-white font-montserrat text-center text-[14px] mt-4 relative">
        Discover how our intuitive platform simplifies every aspect of managing
        your amateur football club, from communication <span>to game day.</span>
        <Image
          className="absolute bottom-[-44px] right-16 "
          src={"/line.svg"}
          alt="Line"
          width={120}
          height={120}
        />
      </p>
      {stepCards.map((card, index) => (
        <Card className="mt-8 relative overflow-hidden" key={index}>
          <div className="text-white flex justify-between font-bold font-montserrat">
            <h3>{card.title}</h3>
            <span>{card.number}</span>
          </div>
          <p className="text-white font-light font-montserrat text-sm mt-2">
            {card.descripion}
          </p>
          {index === 0 && (
            <div className="flex items-center gap-20 mt-12">
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
              <div className="flex flex-col items-center shadow-card py-2 px-4 mb-4 rounded-lg bg-[#232323]/20 -rotate-10 ">
                <h4 className="text-white font-montserrat text-xs font-bold">
                  Welcome to ClubHive
                </h4>
                <Image
                  src={"/arrow.svg"}
                  alt="Arrow"
                  width={30}
                  height={30}
                  className="rotate-220 mt-2"
                />
                <button className=" bg-[#181818] w-full shadow-inner-color rounded-lg py-1 bg-gradient-to-r from-[#ffffff] to-[#666688] text-transparent bg-clip-text text-[12px] font-montserrat font-bold text-lg mt-4">
                  Get started
                </button>
              </div>
            </div>
          )}
          {index === 1 && (
            <div className="shadow-sm shadow-[#585BFF] rounded-xl pt-4 pb-14 mt-8 bg-[#26263B]/45 ">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={"/coach-alex.svg"}
                  alt="Blur"
                  width={35}
                  height={35}
                />
                <h4 className="text-white font-montserrat font-bold">
                  Coach Alex
                </h4>
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
              <button className="absolute text-white text-[12px] font-montserrat font-bold text-lg mt-4 -rotate-6 bg-[#181818] shadow-inner-color rounded-lg py-1 px-6 right-[120px] bottom-3 ">
                Send invitation
              </button>
            </div>
          )}
          <div className="w-35 h-35 bottom-0 right-0 absolute bg-gradient-to-r from-[#666688] to-[#585FFF] rounded-lg blur-[120px]"></div>
        </Card>
      ))}
    </>
  );
}
