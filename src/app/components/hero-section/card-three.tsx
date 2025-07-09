import React from "react";
import Image from "next/image";
import Card from "@/app/ui/card";

export default function CardThree() {
  return (
    <>
      <Card
        size="md"
        className="flex items-center justify-center py-10 relative overflow-hidden xl:-top-50 xl:-right-20 xl:-rotate-3"
      >
        <div className="font-montserrat space-y-2 text-lg">
          <p className="text-white text-left bg-[var(--color-secondary)]/20 p-3 rounded-2xl shadow-inner-both">
            📅 Next Match : Sunday 11am
          </p>
          <p className="text-white text-left">🧾 5 new player registrations</p>
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
    </>
  );
}
