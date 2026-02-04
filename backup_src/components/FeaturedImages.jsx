import React from 'react';
import kitchen1 from '../assets/Kitchen 1.jpg';
import kitchen2 from '../assets/kitchen 2.jpg';

const FeaturedImages = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-serif font-bold text-dosteon-black mb-4">Who it's for?</h2>
          <p className="text-dosteon-gray text-lg font-medium">Empowering every part of the food supply chain</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1: For Restaurants */}
          <div className="rounded-[40px] overflow-hidden bg-dosteon-light flex flex-col h-full border border-gray-100 group">
             <div className="p-2 pt-2 px-2 pb-0">
               <div className="aspect-16/10 bg-white rounded-[32px] overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-[1.01]">
                  <img src={kitchen2} alt="Restaurant Kitchen" className="w-full h-full object-cover" />
               </div>
             </div>
             
             <div className="p-10 pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-green text-[#059669] text-[10px] font-bold mb-6 tracking-wider uppercase">
                 ✨ For Restaurants
                </div>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-dosteon-black leading-tight mb-4 whitespace-nowrap">
                  Track your food business.
                </h3>
                <ul className="space-y-4">
                   {['Track stock movements', 'Low stock notifications', 'Real price of the stock based on usage'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[15px] text-[#059669] font-bold">
                         <div className="w-5 h-5 rounded-full bg-accent-green flex items-center justify-center text-[10px]">✓</div>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Card 2: For Suppliers */}
          <div className="rounded-[40px] overflow-hidden bg-dosteon-light flex flex-col h-full border border-gray-100 group">
             <div className="p-2 pt-2 px-2 pb-0">
               <div className="aspect-16/10 bg-white rounded-[32px] overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-[1.01]">
                  <img src={kitchen1} alt="Supplier View" className="w-full h-full object-cover" />
               </div>
             </div>

             <div className="p-10 pt-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-green text-[#059669] text-[10px] font-bold mb-6 tracking-wider uppercase">
                 ✨ For Suppliers
                </div>
                <h3 className="text-[28px] md:text-[32px] font-serif font-bold text-dosteon-black leading-tight mb-4 whitespace-nowrap">
                  Manage from anywhere.
                </h3>
                <ul className="space-y-4">
                   {['Responsive for every device', 'Real-time synchronization', 'Integrated into other devices'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[15px] text-[#059669] font-bold">
                         <div className="w-5 h-5 rounded-full bg-accent-green flex items-center justify-center text-[10px]">✓</div>
                         {item}
                      </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImages;
