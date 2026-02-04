import React from 'react';
import mockup from '../assets/track-d.png';
const FeaturePromo = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-promo-light rounded-[48px] py-16 md:py-24 px-8 md:px-16 border border-blue-50/50">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-[1.4] w-full order-2 md:order-1 relative">
            <div className="relative z-10 transition-transform duration-700 hover:scale-[1.03]">
              {/* Removed the internal white card to allow the image to blend seamlessly with the section background */}
              <div className="overflow-hidden">
                <img 
                  src={mockup} 
                  alt="Dosteon Dashboard Mockup" 
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
            
            {/* Larger Soft Gradient behind laptop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[140px] -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl order-1 md:order-2">
            <h2 className="text-[36px] md:text-[54px] lg:text-[70px] font-serif font-bold text-dosteon-black leading-[1.05] mb-8">
              Track what you have. <br className="hidden md:block" />
              <span className="text-[#10B981]">Order what you need.</span> <br className="hidden md:block" />
              Know what to do next.
            </h2>
            
            <p className="text-dosteon-gray text-xl md:text-2xl font-medium mb-10 opacity-90 leading-relaxed">
              Less chaos. More control. More calm.
            </p>
            
            <ul className="space-y-6 mb-12">
              {[
                "Find & connect with verified suppliers.",
                "Place & track orders in real time.",
                "Restock on-time and keep inventory fresh under control."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-dosteon-black font-semibold text-lg md:text-xl">
                  <div className="w-7 h-7 rounded-full bg-accent-green text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary hover:bg-primary-dark text-white px-10 md:px-12 py-4 md:py-6 rounded-2xl text-xl font-bold shadow-[0_20px_40px_-10px_rgba(59,89,218,0.3)] transition-all active:scale-95 flex items-center gap-3 group">
              Get Early Access
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1.5">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturePromo;
