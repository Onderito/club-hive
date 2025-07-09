import React from "react";
import Image from "next/image";
import Card from "../ui/card";
import StepCardContentOne from "../components/how-it-works/step-card-content-one";
import StepCardContentTwo from "../components/how-it-works/step-card-content-two";
import StepCardContentThree from "../components/how-it-works/step-card-content-three";

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
      <h2 className="text-white relative text-center text-[24px] md:text-[32px] lg:text-[42px] xl:text-[48px] font-montserrat font-bold mt-12 md:mt-16 xl:mt-32">
        How It{" "}
        <span className="bg-gradient-to-r from-[#D0D0D0] to-[#393939] text-transparent bg-clip-text">
          Works ?
        </span>
        <Image
          src={"/big-blur.svg"}
          alt="Blur"
          width={400}
          height={400}
          className="hidden xl:block absolute right-[-400px] xl:top-0 "
        />
        <div className="hidden xl:block absolute xl:w-[372px] xl:h-[324px] bg-gradient-to-r from-[#666688] to-[#616161] blur-[400px] left-[-300px] "></div>
      </h2>
      <p className="text-white font-montserrat text-center text-[14px] md:text-[16px] lg:text-[20px] xl:text-[24px] mt-4 relative">
        Discover how our intuitive platform simplifies every aspect of managing
        your amateur football club, from communication <span>to game day.</span>
        <Image
          className="absolute xl:w-[180px] xl:h-[200px] bottom-[-44px] xl:bottom-[-105px] right-16 md:right-22 lg:right-48 xl:right-124"
          src={"/line.svg"}
          alt="Line"
          width={120}
          height={120}
        />
      </p>
      <div className="xl:grid xl:grid-cols-3 xl:gap-8 xl:mt-14 relative">
        {stepCards.map((card, index) => (
          <div className="flex justify-center" key={index}>
            <Card className="mt-8 relative overflow-hidden">
              <div className="text-white flex justify-between font-montserrat">
                <h3 className="md:text-xl lg:text-2xl xl:text-xl font-bold">
                  {card.title}
                </h3>
                <span>{card.number}</span>
              </div>
              <p className="text-white font-light font-montserrat text-sm lg:text-base xl:text-md mt-2">
                {card.descripion}
              </p>
              {index === 0 && <StepCardContentOne />}
              {index === 1 && <StepCardContentTwo />}
              {index === 2 && <StepCardContentThree />}
              <div className="w-35 h-35 bottom-0 right-0 absolute bg-gradient-to-r from-[#666688] to-[#585FFF] rounded-lg blur-[120px]"></div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
