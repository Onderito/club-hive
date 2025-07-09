import HeroSection from "./landing/hero-section";
import ChooseUs from "./landing/choose-us";
import HowItWorks from "./landing/how-it-works";
import FAQ from "./landing/faq";

export default function Home() {
  return (
    <>
      {/* Contenu Héro */}
      <div className="w-full absolute h-40 top-[-70px] bg-gradient-to-r from-[#666688] to-[#585FFF] blur-[140px]"></div>
      <section className="container mx-auto px-2 py-16 xl:py-24 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <HeroSection />
      </section>
      <section className="container mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <ChooseUs />
      </section>
      <section className="container mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <HowItWorks />
      </section>
      <section className="container mx-auto px-2 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
        <FAQ />
      </section>
    </>
  );
}
