import React from "react";
import Image from "next/image";
import Card from "../ui/card";

const stepCards = [
  {
    title: "Smart Club Management",
    description:
      "Plan matches, training sessions, and events in just a few clicks. Effortlessly manage attendance, call-ups, and statistics, saving valuable time.",
    image: "calendar.svg",
  },
  {
    title: "Seamless Communication",
    description:
      "No more lost information! Centralize all exchanges between coaches, players, and parents for perfect coordination and quick decisions.",
    image: "microphone.svg",
  },
  {
    title: "Player Development & Growth",
    description:
      "Track each player's progress with clear statistics. Identify strengths and areas for improvement to help your team grow and succeed.",
    image: "growth.svg",
  },
];

export default function ChooseUs() {
  return (
    <>
      <h2 className="text-white text-center text-[24px] md:text-[32px] lg:text-[42px] xl:text-[48px] font-montserrat font-bold md:mt-16 relative">
        Why choose{" "}
        <span className="bg-gradient-to-r from-[#D0D0D0] to-[#393939] text-transparent bg-clip-text">
          us ?
        </span>
        <div className="hidden xl:block absolute xl:w-[372px] xl:h-[324px] bg-gradient-to-r from-[#666688] to-[#616161] blur-[400px] right-[-300px] "></div>
      </h2>
      <Image
        className="-rotate-120 items-center mx-auto mt-4 lg:w-[50px] lg:h-[80px]"
        src={"/arrow.svg"}
        alt="Arrow"
        width={40}
        height={40}
      />
      <div className="flex flex-col justify-center items-center xl:flex-row xl:gap-8 xl:mt-14">
        {stepCards.map((card, index) => (
          <Card
            key={index}
            className={`mt-6 py-6 relative overflow-hidden pb-28 ${
              index === 1 ? "xl:top-[-40px]" : ""
            } `}
          >
            <div className="text-white font-montserrat">
              <h3 className="font-bold text-lg md:text-xl lg:text-2xl ">
                {card.title}
              </h3>
              <p className="font-light text-sm lg:text-base mt-2">
                {card.description}
              </p>
              <Image
                src={`/${card.image}`}
                alt={card.title}
                width={170}
                height={170}
                className="mt-4 absolute bottom-[-30px] right-[-35px]"
              />
              <div className="w-50 h-50 absolute bg-gradient-to-r from-[#666688] to-[#585FFF] rounded-lg blur-[120px]"></div>
            </div>
          </Card>
        ))}
      </div>
      <h3 className="text-white text-center text-[20px] md:text-[24px] lg:text-[32px] font-montserrat font-light mt-8 relative">
        The only platform your club needs
        <span className="bg-[linear-gradient(90deg,#D0D0D0_0%,rgba(88,91,255,0.2)_90%)] bg-clip-text text-transparent font-shantell">
          {""} to trust.
        </span>
        <Image
          src={"/three-lines.svg"}
          alt="three lines"
          width={40}
          height={40}
          className=" hidden md:block md:absolute md:top-[-30px] lg:top-[-40px] xl:top-[-65px] md:right-12 lg:right-16 xl:right-68 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[80px] xl:w-[80px] xl:h-[120px]"
        />
      </h3>
    </>
  );
}
