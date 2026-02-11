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
    <section className="py-16 md:py-24 bg-white overflow-hidden px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="bg-[#f9fafb]/50 rounded-[48px] md:rounded-[80px] px-5 py-10 md:py-16 md:px-12 border border-gray-50/50">
          {/* Header Block */}
          <div className="text-left mb-12 md:mb-20 max-w-3xl">
            <Motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[48px] font-inriaSerif text-[#1d2120] font-bold mb-4"
            >
              Who is it for?
            </Motion.h2>
            <Motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#6B7280] text-base md:text-lg font-figtree"
            >
              Built for the real people powering Africa’s food economy.
            </Motion.p>
          </div>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {audiences.map((card, index) => (
              <Motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300"
              >
                {/* Image Header */}
                <div className="h-[260px] md:h-[380px] w-full relative">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Card Body */}
                <div className="p-6 md:p-10 flex flex-col items-start gap-8">
                  {/* Audience Label Pill */}
                  <div className="inline-flex items-center bg-[#EBEDFF] px-5 py-2 rounded-full">
                    <span className="text-primary font-bold font-figtree text-sm md:text-base">
                      {card.title}
                    </span>
                  </div>
                  
                  <ul className="space-y-4 md:space-y-6">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex gap-4 items-center">
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
                        <p className="text-[#4B5563] text-[15px] md:text-[17px] font-figtree font-medium leading-tight">
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
      </div>
    </section>
  );
}
