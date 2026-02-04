"use client";

import { Box, Users, Lightbulb } from "lucide-react";
import { motion as Motion } from "framer-motion";

export function WhatDosteonDoes() {
  const cards = [
    {
      icon: <Box className="text-white" size={24} />,
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
    <section className="py-16 md:py-24 bg-[#f7f7f7] overflow-hidden">
      <div className="container-custom">
        {/* Header Block */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[40px] font-figtree text-[#1d2120] font-bold mb-4"
          >
            What Dosteon Does
          </Motion.h2>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#6B7280] text-base md:text-lg font-figtree px-4 md:px-0"
          >
            Everything you need to run your food business with confidence
          </Motion.p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-start text-left hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                {card.icon}
              </div>
              
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1d2120] mb-4 font-figtree leading-tight">
                {card.title}
              </h3>
              
              <p className="text-[#6B7280] text-[15px] md:text-[16px] leading-relaxed font-medium font-figtree">
                {card.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
