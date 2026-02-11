"use client";

import { Archive, Users, Lightbulb } from "lucide-react";
import { motion as Motion } from "framer-motion";

export function WhatDosteonDoes() {
  const cards = [
    {
      icon: <Archive className="text-white" size={24} />,
      title: "Inventory Management",
      description: "See your stock in real time. Track daily usage, spot waste early, and always know what’s running low, without spreadsheets or manual guesswork.",
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Manage Your Suppliers",
      description: "Order from trusted suppliers, keep pricing and delivery history in one place, and stop digging through chats to figure out what happened.",
    },
    {
      icon: <Lightbulb className="text-white" size={24} />,
      title: "Decisions, not dashboards",
      description: "Dosteon recommends what to reorder, when to reorder, and who to buy from, based on how your business actually runs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="bg-[#f7f7f7] rounded-[48px] md:rounded-[80px] px-5 py-10 md:py-16 md:px-12 border border-gray-100/50 relative overflow-hidden">
          {/* Header Block */}
          <div className="text-left mb-16 md:mb-20 max-w-3xl relative z-10">
            <Motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[48px] font-inriaSerif text-[#1d2120] font-bold mb-4"
            >
              What Dosteon Does
            </Motion.h2>
            <Motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#6B7280] text-[16px] md:text-lg font-figtree"
            >
              Everything you need to run your food business with confidence
            </Motion.p>
          </div>
          
          {/* Cards Stack/Grid */}
          <div className="flex flex-col gap-6 relative z-10 md:grid md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white px-5 py-8 md:p-10 rounded-[32px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-row items-center lg:flex-col lg:items-start text-left hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] transition-all duration-300 group gap-6 md:gap-8 ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Icon Container - Now horizontal on mobile */}
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#EBEDFF] rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                  <div className="text-primary">
                    {index === 0 && <Archive className="w-6 h-6 md:w-8 md:h-8" />}
                    {index === 1 && <Users className="w-6 h-6 md:w-8 md:h-8" />}
                    {index === 2 && <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />}
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <h3 className="text-[18px] md:text-[22px] font-bold text-[#1d2120] mb-2 lg:mb-5 font-inriaSerif leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-[#6B7280] text-[14px] md:text-[17px] leading-tight md:leading-relaxed font-figtree font-medium">
                    {card.description}
                  </p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
