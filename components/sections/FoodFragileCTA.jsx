"use client";

import { Button } from "../ui/Button";
import Link from "next/link";
import { motion as Motion } from "framer-motion";

export function FoodFragileCTA() {
  return (
    <section className="flex flex-col bg-white">
      {/* Full-Width Visual Banner - Chef Image */}
      <div 
        className="w-full h-[400px] md:h-[600px] lg:h-[1800px] bg-center bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: 'url("/assets/food-banner.jpg")',
        }}
        aria-label="Chef preparing food banner"
      />

      {/* Dark CTA Section - No gap between image and this */}
      <div className="bg-[#1d2120] py-20 md:py-32 lg:py-48 text-center text-white px-5">
        <div className="container-custom flex flex-col items-center">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[64px] font-figtree mb-6 md:mb-8 leading-[1.1] max-w-3xl mx-auto font-bold"
          >
            Food systems shouldn't <br className="hidden md:block" />
            be fragile.
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-[15px] md:text-[18px] font-figtree leading-relaxed max-w-2xl mb-10 md:mb-12"
          >
            They should adapt, recover, and get stronger with use. Dosteon is built as a living system designed to support real businesses operating in real conditions.
          </Motion.p>
          
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-auto"
          >
            <Link href="/contact" className="w-full block md:inline-block">
              <Button className="w-full md:w-auto bg-white text-[#1d2120] hover:bg-white/90 px-10 md:px-12 py-4 md:py-5 text-lg font-bold rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-black/20">
                Get Early Access
                <span className="text-xl">→</span>
              </Button>
            </Link>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
