import React from "react";
import Image from "next/image";
import Button from "@/app/ui/button";
import CardOne from "../components/hero-section/card-one";
import CardTwo from "../components/hero-section/card-two";
import CardThree from "../components/hero-section/card-three";
import CardFour from "../components/hero-section/card-four";

export default function HeroSection() {
  return (
    <div className="relative ">
      <h1 className="text-white text-[28px] md:text-[40px] lg:text-[54px] xl:text-[80px] leading-10 md:leading-14 lg:leading-18 xl:leading-26 text-center font-montserrat font-bold">
        The platform for modern{" "}
        <span className="font-shantell bg-[var(--color-secondary)]/20 px-1 rounded-lg shadow-inner-both">
          amateur
        </span>{" "}
        football clubs
      </h1>
      <Image
        src={"/group.svg"}
        alt="Group"
        width={40}
        height={40}
        className="absolute top-[-30px] right-0 md:right-14 lg:right-16 xl:right-28 md:w-[50px] md:h-[50px] lg:w-[70px] lg:h-[70px]"
      />
      <p className="text-white text-center text-[16px] md:text-[18px] xl:text-[20] mt-4 xl:mt-6 font-montserrat">
        The all-in-one platform to manage, connect, and grow your amateur
        football club.
      </p>
      <div className="flex justify-center items-center gap-4 mt-6 xl:mt-8 relative">
        <Button
          className="cursor-pointer"
          variant="primary"
          size="lg"
          children="Get Started For Free"
        />
        <Button
          className="cursor-pointer"
          variant="secondary"
          size="lg"
          children="How It Works"
        />
        <Image
          className="absolute right-10 md:right-18 bottom-[-80px] md:bottom-[-65px] lg:right-36 xl:right-92 rotate-60 md:rotate-0"
          src={"/arrow.svg"}
          alt="Arrow"
          width={40}
          height={40}
        />
      </div>
      <button className="bg-[var(--color-primary)] font-shantell text-sm text-white shadow-inner-dark p-2 rounded-lg absolute top-[-38px] xl:top-[-24px] md:left-20 xl:left-40 -rotate-3">
        Your club. Your community. Your rules.
      </button>
      <section className="mt-28">
        <div className="flex flex-col gap-6 md:gap-8 md:grid md:grid-cols-2 xl:grid-cols-4 ">
          {/* Card Stats */}
          <CardFour />
          {/* Card Clubs */}
          <CardOne />
          {/* Card Dialogue */}
          <CardTwo />
          {/* Card Calendar */}
          <CardThree />
        </div>
      </section>
    </div>
  );
}
