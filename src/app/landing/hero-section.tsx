import React from "react";
import Image from "next/image";
import Card from "@/app/ui/card";
import Button from "@/app/ui/button";

const clubs = [
  {
    name: "Fc Nice",
    country: "France",
    logo: "/nice-club.svg",
  },
  {
    name: "Dakar Lions",
    country: "Sénégal",
    logo: "/dakar-club.svg",
  },
  {
    name: "Mérignac",
    country: "France",
    logo: "/merignac-club.svg",
  },
  {
    name: "Rapid FC",
    country: "France",
    logo: "/rapid-club.svg",
  },
];

const messages = [
  {
    name: "Coach Louis",
    avatar: "/coach-louis.svg",
    message: "Prêt pour le match de dimanche ?",
  },
  {
    name: "Coach Alex",
    avatar: "/coach-alex.svg",
    message: "Oui, l’équipe est motivée !",
  },
];

export default function HeroSection() {
  return (
    <div className="relative">
      <h1 className="text-white text-[28px] leading-10 text-center font-montserrat font-bold">
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
        className="absolute top-[-40px] right-0"
      />
      <p className="text-white text-center text-[16px] mt-4 font-montserrat">
        The all-in-one platform to manage, connect, and grow your amateur
        football club.
      </p>
      <div className="flex justify-center items-center gap-4 mt-6 relative">
        <Button variant="primary" size="lg" children="Get Started For Free" />
        <Button variant="secondary" size="lg" children="How It Works" />
        <Image
          className="absolute right-10 bottom-[-80px] rotate-60"
          src={"/arrow.svg"}
          alt="Arrow"
          width={40}
          height={40}
        />
      </div>
      <button className="bg-[var(--color-primary)] font-shantell text-sm text-white shadow-inner-dark p-2 rounded-lg absolute top-[-45px] -rotate-3">
        Your club. Your community. Your rules.
      </button>
      <section className="mt-28">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Card Clubs */}
          <Card size="md" className="flex-1">
            <div className="flex flex-col space-y-4">
              {clubs.map((club) => (
                <div key={club.name} className="flex items-center gap-3">
                  <Image
                    src={club.logo}
                    alt={club.name}
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col font-montserrat">
                    <h3 className="text-white text-lg">{club.name}</h3>
                    <p className="text-[#909090] text-md">{club.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card Dialogue */}
          <Card size="md" className="flex-1">
            <div className="flex flex-col space-y-14">
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
          </Card>
        </div>
      </section>
    </div>
  );
}
