"use client";

import { motion as Motion } from "framer-motion";

export function SDGSection() {
  const sdgs = [
    {
      id: 2,
      name: "Zero Hunger",
      image: "/assets/sdgs/sdg2.png",
      color: "#D3A029",
    },
    {
      id: 8,
      name: "Decent Work and Economic Growth",
      image: "/assets/sdgs/sdg8.png",
      color: "#A21942",
    },
    {
      id: 9,
      name: "Industry, Innovation and Infrastructure",
      image: "/assets/sdgs/sdg9.png",
      color: "#F36D25",
    },
    {
      id: 12,
      name: "Responsible Consumption and Production",
      image: "/assets/sdgs/sdg12.png",
      color: "#BF8B2E",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden px-5 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="relative bg-[#F0FFF8] px-5 py-10 md:py-16 md:px-12 rounded-[48px] md:rounded-[80px] overflow-hidden border border-green-50/50">
          {/* Pattern Overlay */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd' stroke='%23000' stroke-width='0.5' stroke-opacity='0.5'%3E%3Ccircle cx='40' cy='40' r='6'/%3E%3Ccircle cx='40' cy='40' r='14'/%3E%3Ccircle cx='40' cy='40' r='22'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3Ccircle cx='40' cy='40' r='38'/%3E%3Cline x1='40' y1='40' x2='40' y2='2' /%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          ></div>

          <div className="relative z-10">
            {/* Header Block */}
            <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
              <Motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-[32px] md:text-[48px] font-inriaSerif text-[#1d2120] font-bold mb-4"
              >
                SDG Section
              </Motion.h2>
              <Motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-2 px-2"
              >
                <p className="text-[#6B7280] text-[15px] md:text-[18px] font-figtree font-medium">
                  We’re not just building a platform.
                </p>
                <p className="text-[#1d2120] text-[15px] md:text-[18px] font-figtree font-bold">
                  We’re building a future-proof food ecosystem for Africa.
                </p>
              </Motion.div>
            </div>
            
            {/* SDG Tiles Grid */}
            <div className="grid grid-cols-4 gap-2 md:gap-6 max-w-4xl mx-auto px-2">
              {sdgs.map((sdg, index) => (
                <Motion.div 
                  key={sdg.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square rounded-xl overflow-hidden shadow-none hover:scale-[1.02] transition-transform duration-300"
                  style={{ backgroundColor: sdg.color }}
                >
                  <img 
                    src={sdg.image} 
                    alt={`${sdg.id}. ${sdg.name}`}
                    className="w-full h-full object-cover"
                  />
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
