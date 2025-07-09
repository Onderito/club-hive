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
      <h1 className="text-white text-[28px] md:text-[40px] leading-10 md:leading-14 text-center font-montserrat font-bold">
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
        className="absolute top-[-30px] right-0 md:right-14 md:w-[50px] md:h-[50px]"
      />
      <p className="text-white text-center text-[16px] md:text-[18px] mt-4 font-montserrat">
        The all-in-one platform to manage, connect, and grow your amateur
        football club.
      </p>
      <div className="flex justify-center items-center gap-4 mt-6 relative">
        <Button variant="primary" size="lg" children="Get Started For Free" />
        <Button variant="secondary" size="lg" children="How It Works" />
        <Image
          className="absolute right-10 md:right-18 bottom-[-80px] md:bottom-[-65px] rotate-60 md:rotate-0"
          src={"/arrow.svg"}
          alt="Arrow"
          width={40}
          height={40}
        />
      </div>
      <button className="bg-[var(--color-primary)] font-shantell text-sm text-white shadow-inner-dark p-2 rounded-lg absolute top-[-38px] md:left-20 -rotate-3">
        Your club. Your community. Your rules.
      </button>
      <section className="mt-28 ">
        <div className="flex flex-col gap-6 md:gap-8 md:grid md:grid-cols-2">
          {/* Card Clubs */}
          <Card size="md" className="relative overflow-hidden">
            <div className="flex flex-col space-y-4 relative z-50">
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
            <div className="w-full absolute h-56 z-0 top-[-70px] bg-gradient-to-r from-[#666688] to-[#585FFF] blur-[240px]"></div>
          </Card>

          {/* Card Dialogue */}
          <Card size="md" className="py-10 relative overflow-hidden">
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

          {/* Card Calendar */}
          <Card
            size="md"
            className="flex items-center justify-center py-10 relative overflow-hidden"
          >
            <div className="font-montserrat space-y-2 text-lg">
              <p className="text-white text-left bg-[var(--color-secondary)]/20 p-3 rounded-2xl shadow-inner-both">
                📅 Next Match : Sunday 11am
              </p>
              <p className="text-white text-left">
                🧾 5 new player registrations
              </p>
              <p className="text-white text-left">🏟️ Field : Stade Camille</p>
              <p className="text-white text-left">📥 2 pending requests</p>
            </div>
            <Image
              src={"/little-ellipse-blur.svg"}
              alt="Blur"
              width={300}
              height={300}
              className="absolute bottom-[-150px] right-[-120px]"
            />
          </Card>

          {/* Card Stats */}
          <Card className="relative">
            <div>
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
                <h3 className="text-[#909090] text-center font-montserrat">
                  Pass
                </h3>
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
              <Image
                src="/on-stream.svg"
                alt="On Stream"
                width={25}
                height={25}
              />
              <p className="text-white font-extralight">Live</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
