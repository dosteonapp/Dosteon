"use client";

import { Users, Scale, Sprout, Heart, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { motion as Motion } from "framer-motion";

export function WhyChooseSection() {
  const valueItems = [
    {
      icon: <Users size={24} className="text-[#1d2120]/60" />,
      title: "Human-Centered Tech",
      description: "We design with people first. Every feature is tested to reduce stress, save time, and make daily tasks feel simple, whether you're behind the counter or on the delivery road.",
    },
    {
      icon: <Scale size={24} className="text-[#1d2120]/60" />,
      title: "Transparent & Fair",
      description: "No hidden fees, no confusing fine print. You always see what's happening with your orders, payments, and performance, so you can make decisions with confidence.",
    },
    {
      icon: <Sprout size={24} className="text-[#1d2120]/60" />,
      title: "Future-Ready",
      description: "Whether you're a small café or a growing distributor, Dosteon grows with you. Our platform scales easily, integrates with your existing tools, and evolves as your needs change.",
    },
    {
      icon: <Heart size={24} className="text-[#1d2120]/60" />,
      title: "Built on Values",
      description: "Respect, dignity, humility, fairness, and integrity aren't just words to us. They shape how we build, measure success, and support you.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="bg-[#F6F0FF] rounded-[48px] md:rounded-[80px] px-5 py-12 md:py-16 md:px-12 shadow-premium border border-blue-50/10">
          <div className="flex flex-col gap-12 xl:grid xl:grid-cols-2 xl:gap-20 items-start">
            
            {/* Top/Left Column: Heading, Paragraph, Image */}
            <div className="flex flex-col gap-8 xl:sticky xl:top-32 text-center xl:text-left order-1">
              <div className="flex flex-col items-center xl:items-start">
                <Motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-[36px] md:text-[54px] font-inriaSerif text-[#1d2120] font-bold leading-[1.1] mb-6 md:mb-8"
                >
                  Why Choose Dosteon?
                </Motion.h2>
                <Motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-[#6B7280] text-[15px] md:text-[17px] font-figtree leading-relaxed max-w-lg mb-10 mx-auto xl:mx-0"
                >
                  Food supply isn’t just logistics; it’s people, trust, and shared success. Here’s why suppliers and food businesses choose us:
                </Motion.p>

                <Motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="rounded-[32px] overflow-hidden shadow-2xl mb-4 xl:mb-0 w-full max-w-2xl mx-auto"
                >
                  <img 
                    src="/assets/why-us.jpg" 
                    alt="Chef Preparing Food" 
                    className="w-full h-[240px] md:h-[450px] object-cover"
                  />
                </Motion.div>
              </div>
            </div>

            {/* Bottom/Right Column: Value Items Cards + CTA */}
            <div className="flex flex-col gap-8 order-2 w-full">
              <div className="flex flex-col gap-4">
                {valueItems.map((item, index) => (
                  <Motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-5 md:p-10 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-white/60 flex flex-col sm:flex-row items-start gap-4 md:gap-10 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Card Left: Icon & Title */}
                    <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3 sm:w-[140px] shrink-0">
                      <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary/70 shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-[16px] md:text-[18px] font-bold text-[#1d2120] font-inriaSerif leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Card Right: Description */}
                    <p className="text-[#6B7280] text-[14px] md:text-[17px] leading-relaxed font-figtree font-medium">
                      {item.description}
                    </p>
                  </Motion.div>
                ))}
              </div>

              {/* CTA Button centered at bottom */}
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full pt-4 flex justify-center xl:justify-start"
              >
                <Link href="/contact" className="inline-block w-full sm:w-auto group">
                  <Button className="w-full sm:w-auto bg-[#3B59DA] hover:bg-[#2F47AF] text-white px-10 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold shadow-xl shadow-blue-500/10 transition-all hover:scale-[1.02] active:scale-95">
                    Get Early Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

