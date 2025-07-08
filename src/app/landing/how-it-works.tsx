import React from "react";
import Image from "next/image";
import Card from "../ui/card";

export default function HowItWorks() {
  return (
    <>
      <h2 className="text-white text-center text-[24px] font-montserrat font-bold mt-12 ">
        How It{" "}
        <span className="bg-gradient-to-r from-[#D0D0D0] to-[#393939] text-transparent bg-clip-text">
          Works ?
        </span>
      </h2>
    </>
  );
}
