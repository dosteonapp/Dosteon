"use client";

import { Users, Scale, Rocket, Heart, ArrowRight } from "lucide-react";
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
      icon: <Rocket size={24} className="text-[#1d2120]/60" />,
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
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading, Paragraph, Image, CTA */}
          <div className="flex flex-col gap-6 md:gap-8 md:sticky md:top-32 order-1 md:order-1">
            <div>
              <Motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-[32px] md:text-[54px] font-figtree text-[#1d2120] font-bold leading-[1.1] mb-6 md:mb-8"
              >
                Why Choose Dosteon?
              </Motion.h2>
              <Motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[#6B7280] text-[16px] md:text-[18px] font-figtree leading-relaxed max-w-md"
              >
                Food supply isn’t just logistics; it’s people, trust, and shared success. Here’s why suppliers and food businesses choose us:
              </Motion.p>
            </div>

            <Motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-[24px] md:rounded-[32px] overflow-hidden shadow-premium"
            >
              <img 
                src="/assets/why-us.jpg" 
                alt="Chef Preparing Food" 
                className="w-full h-[240px] md:h-[320px] object-cover"
              />
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-auto"
            >
              <Link href="/contact" className="w-full block md:inline-block">
                <Button className="w-full md:w-auto bg-[#EBEDFF] hover:bg-[#DDE0FF] text-primary px-8 py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-bold transition-all hover:scale-[1.02] active:scale-95">
                  Get Early Access
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </Motion.div>
          </div>

          {/* Right Column: Value Items List */}
          <div className="flex flex-col order-2 md:order-2">
            {valueItems.map((item, index) => (
              <Motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`py-6 md:py-10 ${index !== valueItems.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="shrink-0 mt-1 scale-90 md:scale-100">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-[#1d2120] font-figtree">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed font-figtree font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
