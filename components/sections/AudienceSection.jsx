"use client";

import { Utensils, Store, CheckCircle2 } from "lucide-react";
import { motion as Motion } from "framer-motion";

export function AudienceSection() {
  const audiences = [
    {
      title: "For Restaurants",
      image: "/assets/restaurant.jpg",
      icon: <Utensils size={20} className="text-[#00A13E]" />,
      points: [
        "Stay in control of inventory and costs.",
        "Avoid stockouts and over-ordering.",
        "Run your business confidently, even when you’re not on-site.",
      ],
    },
    {
      title: "For Suppliers",
      image: "/assets/supplier.jpg",
      icon: <Store size={20} className="text-[#00A13E]" />,
      points: [
        "Sell to better-matched customers.",
        "Track demand patterns over time.",
        "Build trust with clear records and reliable fulfillment.",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header Block */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[40px] font-serif text-[#1d2120] font-bold mb-4"
          >
            Who It’s For
          </Motion.h2>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#6B7280] text-base md:text-lg font-sans px-4 md:px-0"
          >
            Built for the real people powering Africa’s food economy.
          </Motion.p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {audiences.map((card, index) => (
            <Motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all duration-300"
            >
              {/* Image Header */}
              <div className="h-[240px] md:h-[420px] w-full relative">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Body */}
              <div className="p-6 md:p-10 flex flex-col items-start">
                <div className="flex items-center gap-3 bg-[#beffd7]/30 px-4 py-2 rounded-lg mb-6">
                  {card.icon}
                  <span className="text-[#1d2120] font-bold font-sans text-base md:text-lg">
                    {card.title}
                  </span>
                </div>
                
                <ul className="space-y-4 md:space-y-5 grow">
                  {audiences[index].points.map((point, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <div className="shrink-0 mt-1">
                        <CheckCircle2 className="text-[#00A13E] md:w-[22px] md:h-[22px]" size={20} />
                      </div>
                      <p className="text-[#4B5563] text-[15px] md:text-lg font-sans font-medium">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
