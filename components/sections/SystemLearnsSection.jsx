"use client";

import { TrendingUp, Flag, Lightbulb } from "lucide-react";

export function SystemLearnsSection() {
  const learningPoints = [
    {
      icon: <TrendingUp size={20} className="text-white" />,
      text: "Predict what you’ll need next",
    },
    {
      icon: <Flag size={20} className="text-white" />,
      text: "Flag issues before they become problems",
    },
    {
      icon: <Lightbulb size={20} className="text-white" />,
      text: "Improve recommendations as more businesses join",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="bg-[#fbfcff] rounded-[48px] md:rounded-[80px] px-5 py-10 md:py-16 md:px-12 shadow-premium border border-gray-50">
          {/* Top Pill Label */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#beffd7] border border-[#beffd7] px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-[#00a13e] rounded-full"></span> 
              <span className="text-[#1d2120] text-xs font-semibold tracking-wide">
                The Intelligence Layer
              </span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-[32px] md:text-[54px] font-inriaSerif text-[#1d2120] font-bold leading-[1.1]">
              A system that learns as you work.
            </h2>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
            {/* Left Column - Dashboard Mockup */}
            <div className="w-full">
              <img
                src="/assets/system.png"
                alt="Dosteon Learning System Dashboard"
                className="w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl"
              />
            </div>

            {/* Right Column - Content Box */}
            <div className="flex flex-col gap-5 md:gap-6">
              <p className="text-[18px] md:text-[20px] font-inriaSerif font-bold text-[#1d2120]">
                Dosteon doesn't just record data. It uses it.
              </p>

              <div className="bg-white rounded-[28px] md:rounded-3xl p-5 md:p-7 border border-gray-100 shadow-sm border-l-4 border-l-primary/10">
                <p className="text-[#4B5563] text-[15px] md:text-[16px] font-figtree font-medium mb-4 leading-relaxed">
                  It learns from usage, deliveries, and patterns across the network to:
                </p>

                <ul className="space-y-7 mb-5">
                  {learningPoints.map((point, index) => (
                    <li key={index} className="flex gap-4 items-center">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0 shadow-md shadow-blue-500/10">
                        {index === 0 && <TrendingUp size={16} className="text-white" />}
                        {index === 1 && <Flag size={16} className="text-white" />}
                        {index === 2 && <Lightbulb size={16} className="text-white" />}
                      </div>
                      <p className="text-[#1d2120] text-[15px] md:text-[16px] font-figtree font-semibold">
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="text-[#4B5563] text-[14px] md:text-[16px] font-figtree font-medium italic opacity-80">
                  The more you use it, the smarter it gets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
