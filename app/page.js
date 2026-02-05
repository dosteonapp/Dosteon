import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { MainFeatures } from "@/components/sections/MainFeatures";
import { WhatDosteonDoes } from "@/components/sections/WhatDosteonDoes";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { SystemLearnsSection } from "@/components/sections/SystemLearnsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { SDGSection } from "@/components/sections/SDGSection";
import { FoodFragileCTA } from "@/components/sections/FoodFragileCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <MainFeatures />
      <WhatDosteonDoes />
      <AudienceSection />
      <SystemLearnsSection />
      <WhyChooseSection />
      <SDGSection />
      <FoodFragileCTA />
      <Footer variant="white" />
    </main>
  );
}
