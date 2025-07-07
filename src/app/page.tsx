import Image from "next/image";
import Button from "./ui/button";
import Card from "./ui/card";
import HeroSection from "./landing/hero-section";

export default function Home() {
  return (
    <>
      {/* Contenu Héro */}
      <section className="container mx-auto px-2 py-28 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <HeroSection />
      </section>
    </>
  );
}
