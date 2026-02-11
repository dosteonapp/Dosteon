"use client";

import { Button } from "../ui/Button";
import Link from "next/link";
import { motion as Motion } from "framer-motion";

export function FoodFragileCTA() {
  return (
    <div className="flex flex-col">
      {/* Fixed Parallax Banner */}
      <div 
        className="w-full h-[400px] md:h-[800px] lg:h-[1500px] bg-center bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("/assets/food-banner.jpg")',
        }}
        aria-label="Chef preparing food banner"
      />
      
      <section className="bg-black py-12 md:py-20 text-center text-white px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container-custom">
          <div className="bg-black rounded-[48px] md:rounded-[80px] py-16 md:py-24 px-6 md:px-10 relative overflow-hidden shadow-2xl">
            <div className="flex flex-col items-center">
              <Motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-[36px] md:text-[72px] font-inriaSerif mb-8 md:mb-10 leading-[1.05] max-w-6xl mx-auto font-semibold tracking-tight"
              >
                <span className="block">Food supply chains</span>
                <span className="block">shouldn't be fragile.</span>
              </Motion.h2>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300/90 text-[16px] md:text-[20px] font-figtree font-medium leading-[1.7] max-w-4xl mb-12 md:mb-16"
              >
                They should adapt, recover, and get stronger with use. Dosteon is built as a living system designed to support real businesses operating in real conditions.
              </Motion.p>
              
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full md:w-auto"
              >
                <Link href="/contact" className="w-full inline-block">
                  <Button className="w-full md:w-auto bg-white text-[#1d2120] hover:bg-[#EBEDFF] px-16 md:px-24 py-5 md:py-6 text-lg md:text-xl font-bold rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.03] active:scale-95 shadow-2xl shadow-black/40 group">
                    Get Early Access
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </Link>
              </Motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
