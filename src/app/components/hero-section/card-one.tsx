import React from "react";
import Image from "next/image";
import Card from "@/app/ui/card";

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

export default function CardOne() {
  return (
    <>
      <Card size="md" className="relative  overflow-hidden">
        <div className="flex flex-col space-y-4 relative z-50">
          {clubs.map((club) => (
            <div key={club.name} className="flex items-center gap-3">
              <Image src={club.logo} alt={club.name} width={30} height={30} />
              <div className="flex flex-col font-montserrat">
                <h3 className="text-white text-lg">{club.name}</h3>
                <p className="text-[#909090] text-md">{club.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute h-56 z-0 top-[-70px] bg-gradient-to-r from-[#666688] to-[#585FFF] blur-[240px]"></div>
      </Card>
    </>
  );
}
