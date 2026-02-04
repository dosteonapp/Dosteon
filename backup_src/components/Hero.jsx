import React from 'react';
import halfDashboard from '../assets/track-d.png';

const Hero = () => {
  return (
    <section className="relative pt-44 pb-24 md:pt-60 md:pb-32 overflow-hidden circles-pattern bg-[#F8F7F4]">
      <div className="container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-green text-[#059669] text-[12px] font-bold mb-10 tracking-wide uppercase border border-accent-green">
          ✨ Better food system
        </div>

        {/* Title */}
        <h1 className="text-[44px] md:text-[84px] font-serif font-bold text-dosteon-black mb-8 max-w-5xl mx-auto leading-[1.1] tracking-tight">
          Run your food business <br className="hidden md:block" /> without guesswork
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-[20px] text-dosteon-gray max-w-[800px] mx-auto mb-12 leading-[1.6] font-medium">
          We help you manage your food business with ease and precision, giving you more time to focus on what you love.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-24">
          <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl text-[16px] font-bold transition-all shadow-lg active:scale-95">
            Build your System
          </button>
        </div>

        {/* Hero Image - Full Dashboard Mockup */}
        <div className="relative max-w-[1240px] mx-auto">
          <div className="bg-white p-3 rounded-[32px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
            <img 
              src={halfDashboard} 
              alt="Dosteon Dashboard" 
              className="rounded-[24px] w-full object-cover"
            />
          </div>
          
          {/* Subtle side glows */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
