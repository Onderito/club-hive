"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card from "../ui/card";

const stepCards = [
  {
    question: "What is the purpose of this platform ?",
    answer:
      "This platform is designed to streamline communication and management for amateur football clubs, making it easier for coaches, players, and parents to stay connected and organized.",
  },
  {
    question: "How do I create a club profile ?",
    answer:
      "Creating a club profile is simple. Just click on the 'Create Club' button, fill in the required details, and customize your settings to get started.",
  },
  {
    question: "Can I invite team members ?",
    answer:
      "Yes, you can easily invite coaches, players, and parents to join your club's private space by sending them an invitation link.",
  },
  {
    question: "How do I send updates to my team ?",
    answer:
      "You can send instant updates and messages through the platform's communication features, ensuring everyone stays informed and coordinated.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // la fonction setActiveIndex attendra un argument de type number ou null.
  // à null pour que rien ne soit ouvert par défaut.

  // fonction appelée lors du clic sur une question.
  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // si une question est déjà ouverte, on la ferme en mettant activeIndex à null, sinon on ouvre la question en mettant activeIndex à l'index de la question cliquée.

  return (
    <>
      <h2 className="bg-gradient-to-r from-[#393939] to-[#D0D0D0] text-transparent bg-clip-text text-center text-[24px] md:text-[32px] lg:text-[42px] font-montserrat font-bold mt-12 md:mt-16">
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-[#585BFF]/20 to-[#585BFF]/11 text-white p-2 rounded-xl shadow-inner-color">
          FAQ
        </span>{" "}
        Questions
      </h2>
      <p className="text-white font-montserrat text-center text-[14px] md:text-[16px] lg:text-[20px] mt-4">
        We've got answers. Find what you're looking for below.
      </p>
      {stepCards.map((card, index) => (
        <div className="flex justify-center" key={index}>
          <Card className="mt-6 md:py-6 lg:py-10 lg:max-w-2xl relative overflow-hidden">
            <div
              onClick={() => toggleAnswer(index)}
              className="flex justify-between items-center relative z-10"
            >
              <h3 className="text-white font-bold font-montserrat text-md lg:text-xl">
                {card.question}
              </h3>
              <p
                className={`text-white lg:text-2xl font-shantell transition-transform duration-700 ${
                  activeIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </p>
            </div>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100 scale-100 mt-4"
                  : "grid-rows-[0fr] opacity-0 scale-95"
              } overflow-hidden`}
            >
              <div className="overflow-hidden">
                <p className="text-white text-sm">{card.answer}</p>
              </div>
            </div>
            <Image
              src={"/big-blur.svg"}
              alt="Blur"
              width={120}
              height={120}
              className="absolute right-[-60px] top-[-30px] md:top-[-55px] md:right-[-140px] md: z-0 md:w-60 md:h-60"
            />
          </Card>
        </div>
      ))}
    </>
  );
}
