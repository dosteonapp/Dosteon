"use client";

import { Button } from "../ui/Button";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section 
      className="relative pt-32 md:pt-48 pb-0 overflow-hidden"
      style={{
        backgroundColor: '#F7F7F7'
      }}
    >
      {/* Layer B: Diagonal Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(110.67deg, rgba(255, 255, 255, 0.2) 3.13%, rgba(222, 153, 57, 0.137692) 67.01%, rgba(78, 66, 192, 0.2) 99.75%)'
        }}
      ></div>

      {/* Layer C: Denser & More Visible Concentric Circles Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238B7E74' stroke-width='0.8'%3E%3Ccircle cx='45' cy='45' r='10'/%3E%3Ccircle cx='45' cy='45' r='20'/%3E%3Ccircle cx='45' cy='45' r='30'/%3E%3Ccircle cx='45' cy='45' r='40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '90px 90px',
        }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Status Badge / Pill */}
          <Motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#E6F9F1] px-4 py-1.5 rounded-full mb-8 md:mb-12"
          >
            <span className="w-2.5 h-2.5 bg-[#00A13E] rounded-full shrink-0"></span> 
            <span className="font-figtree text-[13px] md:text-[14px] font-semibold text-[#00A13E] whitespace-nowrap">
              Smarter Food Supply Starts Here
            </span>
          </Motion.div>
 
          {/* Primary Headline */}
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inriaSerif text-[#1D2120] leading-none mb-4 md:mb-6 font-bold text-[40px] md:text-[64px] tracking-[-0.04em] max-w-4xl"
          >
            Keep your food business running smoothly, even when you’re not there.
          </Motion.h1>
 
          {/* Supporting Paragraph */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-figtree font-normal leading-[24px] mb-6 md:mb-8 mx-auto text-[16px] text-[#6B7280] tracking-[-0.01em] max-w-2xl"
          >
            We help food business owners and their suppliers streamline operations, 
            eliminate food waste, and build reliable partnerships, all in one simple platform.
          </Motion.p>
 
          {/* Primary CTA Button */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto px-4 md:px-0 mb-6 md:mb-8"
          >
            <Link href="/contact" className="w-full block md:inline-block">
              <Button className="w-full md:w-auto bg-[#3B59DA] hover:bg-[#2F47AF] text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-2 text-[17px] font-bold shadow-xl shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-95 leading-none">
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </Motion.div>
 
          {/* Product Mockup Area - Floating & Clipped */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-4 md:px-0 w-full relative max-w-[1100px] mx-auto z-10 md:-mt-[440px] translate-y-[60px] md:translate-y-[470px]"
          >
             <div className="relative z-10 bg-white rounded-t-[20px] md:rounded-t-[32px] p-2 md:p-4 shadow-[0_45px_100px_rgba(31,31,31,0.08),0_15px_40px_rgba(31,31,31,0.05)] border border-gray-100 border-b-0">
                <img
                  src="/assets/hero-section.png"
                  alt="Dosteon Dashboard Mockup"
                  className="w-full h-auto rounded-t-[14px] md:rounded-t-[24px]"
                />
             </div>
             
             {/* Subtle color glow behind the mockup */}
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4/5 h-4/5 bg-blue-500/5 blur-[120px] -z-10"></div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
