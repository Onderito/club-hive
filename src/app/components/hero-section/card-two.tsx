import React from "react";
import Image from "next/image";
import Card from "@/app/ui/card";

const messages = [
  {
    name: "Coach Louis",
    avatar: "/coach-louis.svg",
    message: " You guys ready for the game on Sunday?",
  },
  {
    name: "Coach Alex",
    avatar: "/coach-alex.svg",
    message: "Yes, we are ready ! ",
  },
];

export default function CardTwo() {
  return (
    <>
      <Card
        size="md"
        className="py-10 relative xl:-rotate-3 xl:-right-10 overflow-hidden"
      >
        <div className="flex flex-col space-y-14 relative z-50">
          {messages.map((coach) => (
            <div key={coach.name} className="flex items-start gap-3">
              <Image
                src={coach.avatar}
                alt={coach.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-montserrat text-white font-semibold text-base">
                    {coach.name}
                  </span>
                </div>
                <p className="text-[#909090] bg-[#232323] p-2 rounded-lg shadow-md text-md mt-1">
                  {coach.message}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src={"/little-blur.svg"}
          alt="Blur"
          width={500}
          height={500}
          className="absolute top-0 left-[-150px] z-0"
        />
      </Card>
    </>
  );
}
