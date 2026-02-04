"use client";

import { Button } from "../ui/Button";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section 
      className="relative pt-32 md:pt-44 pb-0"
      style={{
        background: 'linear-gradient(180deg, #F3EDE4 0%, #F6F4F9 100%)'
      }}
    >
      {/* Pattern Overlay - Smaller Concentric Circles with Stem */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23000' stroke-width='0.5' stroke-opacity='0.5'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3Ccircle cx='40' cy='40' r='14'/%3E%3Ccircle cx='40' cy='40' r='22'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='38'/%3E%3Cline x1='40' y1='40' x2='40' y2='2' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      ></div>

      {/* Ultra-fine Grain Texture for tactile feel */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Status Badge / Pill */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#beffd7] border border-[#beffd7] px-4 py-1.5 rounded-full mb-8 md:mb-10 shadow-sm"
          >
            <span className="w-2.5 h-2.5 bg-[#00a13e] rounded-full shrink-0"></span> 
            <span className="font-figtree text-[13px] md:text-[14px] font-semibold text-secondary whitespace-nowrap">
              Smarter Food Supply Starts Here
            </span>
          </Motion.div>

          {/* Primary Headline */}
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inriaSerif text-secondary leading-[1.1] mb-6 md:mb-8 font-bold text-[40px] md:text-[64px] tracking-tight"
          >
            Run your food business <br className="hidden md:block" />
            without guesswork
          </Motion.h1>

          {/* Supporting Paragraph */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-figtree leading-relaxed mb-8 md:mb-10 mx-auto text-[15px] md:text-[16px] text-secondary max-w-lg"
          >
            Whether manage a restaurant or a supplier fulfilling orders across the city, 
            Dosteon helps you streamline operations, eliminate food waste, and build 
            reliable partnerships, all in one simple platform.
          </Motion.p>

          {/* Primary CTA Button */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto px-4 md:px-0"
          >
            <Link href="/contact" className="w-full block md:inline-block">
              <Button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </Motion.div>

          {/* Product Mockup Area - Clipped to show only the top part */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 md:mt-20 w-full relative max-w-[1200px] mx-auto h-[220px] md:h-[304px] overflow-hidden flex flex-col justify-start"
          >
             <div className="relative z-10 bg-white rounded-t-[24px] p-2 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 border-b-0">
                <img
                  src="/assets/hero-section.png"
                  alt="Dosteon Dashboard Mockup"
                  className="w-full h-auto rounded-t-[16px]"
                />
             </div>
             
             {/* Subtle shadow glow behind the mockup */}
             <div className="absolute top-0 left-0 right-0 -inset-x-4 h-full bg-blue-500/5 blur-3xl -z-10 rounded-t-[40px]"></div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
