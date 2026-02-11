"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { motion as Motion } from "framer-motion";

export function MainFeatures() {
  const points = [
    "Find & connect with verified suppliers.",
    "Place & track orders in real time.",
    "Restock on-time and keep inventory fresh under control.",
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="bg-[#fbfcff] rounded-[48px] md:rounded-[80px] px-5 py-10 md:py-16 md:px-12 shadow-premium border border-blue-50/50 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            {/* Left Column (Visual) */}
            <div className="relative order-1 lg:order-1 flex items-center justify-center">
              <Motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                <img
                  src="/assets/track-d.png"
                  alt="Track and Order Dashboard Mockup"
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] transform lg:scale-125 lg:-translate-x-4"
                />
              </Motion.div>
            </div>

            {/* Right Column (Text + CTA) */}
            <div className="flex flex-col justify-center order-2 lg:order-2 lg:pl-4">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-start text-left"
              >
                <h2 className="text-[34px] md:text-[54px] font-inriaSerif font-bold leading-[1.1] tracking-tight mb-8 md:mb-10 max-w-xl">
                  <span className="text-[#1d2120] block">Track what you have.</span>
                  <span className="text-[#00A13E] block">Order what you need.</span>
                  <span className="text-[#1d2120] block">Less chaos. More control.</span>
                </h2>

                <ul className="space-y-6 mb-10 md:mb-12 text-left w-full max-w-md lg:max-w-none">
                  {points.map((point, index) => (
                    <li key={index} className="flex gap-4 items-center">
                      <div className="shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#DCFCE7] flex items-center justify-center">
                        <svg 
                          width="14" 
                          height="11" 
                          viewBox="0 0 14 11" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 md:w-4 h-auto text-[#00A13E]"
                        >
                          <path 
                            d="M1 5.5L4.5 9L13 1" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-[16px] md:text-[19px] text-[#4B5563] font-figtree font-medium tracking-tight">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link href="/contact" className="inline-block w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#3B59DA] hover:bg-[#2F47AF] text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold shadow-lg shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-95 group">
                      Get Early Access
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
