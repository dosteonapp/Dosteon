import React from 'react';
import mockup from '../assets/system.png';

const SystemUniqueness = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-green text-[#059669] text-xs font-bold mb-6 tracking-[0.2em] uppercase border border-accent-green">
            Product
          </div>
          <h2 className="text-[32px] md:text-[56px] font-serif font-bold text-dosteon-black leading-tight mb-6">
            A system that learns as you work.
          </h2>
          <p className="text-dosteon-gray text-lg md:text-xl max-w-3xl mx-auto font-medium opacity-90 leading-relaxed">
            No more manuals. Dosteon understands how you work and suggests ways to save time and reduce waste.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto">
          <div className="flex-1 w-full order-2 md:order-1 relative">
             <div className="relative z-10">
               <div className="bg-white p-2 md:p-3 rounded-[32px] shadow-[0_32px_84px_-16px_rgba(0,0,0,0.1)] border border-blue-50/50">
                 <img src={mockup} alt="System Mockup" className="rounded-[24px] w-full" />
               </div>
             </div>
             {/* Decorative blob behind laptop */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/40 rounded-full blur-[100px] -z-10"></div>
          </div>
          
          <div className="flex-1 space-y-10 order-1 md:order-2">
             <div className="space-y-8">
                {[
                  { icon: "🛍️", title: "Automated Orders", desc: "Predicts when you'll run out and prepares draft orders for your approval." },
                  { icon: "🛡️", title: "Smart Inventory", desc: "Recognizes usage patterns to give you the most accurate stock values." },
                  { icon: "⚡", title: "Built for every device", desc: "Seamless experience whether you're on a tablet at the bar or a laptop in the office." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start bg-white p-6 rounded-3xl border border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
                     <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        {item.icon}
                     </div>
                     <div>
                        <h4 className="text-[20px] font-bold mb-2 text-dosteon-black">{item.title}</h4>
                        <p className="text-dosteon-gray text-base leading-relaxed font-medium">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemUniqueness;
