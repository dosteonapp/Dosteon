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
    <section className="py-12 md:py-20 bg-white">
      <div className="container-custom">
        <div className="bg-[#fbfcff] rounded-[32px] md:rounded-[48px] p-6 md:p-20 shadow-premium border border-gray-50 overflow-hidden relative">
          {/* Header Block */}
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-[32px] md:text-[54px] font-inriaSerif leading-[1.1] font-bold tracking-tight">
              <span className="text-[#1d2120] block">Track what you have.</span>
              <span className="text-[#00A13E] block">Order what you need.</span>
              <span className="text-[#00A13E] block">Know what to do next.</span>
            </h2>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
            {/* Laptop Mockup Column - Stacks first on mobile */}
            <div className="relative w-full order-1 md:order-1">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/track-d.png"
                  alt="Track and Order Dashboard Mockup"
                  className="w-full h-auto drop-shadow-2xl transform md:-ml-8"
                />
              </Motion.div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col justify-center order-2 md:order-2">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[20px] md:text-[24px] font-figtree font-bold text-[#1d2120] mb-6 md:mb-8">
                  Less chaos. More control. More calm.
                </h3>
                
                <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                  {points.map((point, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="text-[#00A13E] md:w-6 md:h-6" size={20} />
                      </div>
                      <p className="text-[15px] md:text-[18px] text-[#4B5563] font-figtree font-medium">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="w-full md:w-auto block">
                  <Button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 text-lg font-bold shadow-lg shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-95">
                    Get Early Access
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </Motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
