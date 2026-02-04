import React from 'react';
import chefImage from '../assets/chef.jpg';

const WhyDosteon = () => {
  const points = [
    { num: '01', title: "Efficient and sustainable", desc: "Reduce food waste and optimize energy usage with smart analytics that help you do more with less." },
    { num: '02', title: "Built for impact", desc: "Designed with the United Nations SDGs in mind, helping you build a business that's good for the world." },
    { num: '03', title: "Trusted by industry leaders", desc: "Join a network of food businesses that are transforming the African food supply chain." },
    { num: '04', title: "Real-time insights", desc: "Make informed decisions with instant data on stock, sales trends, and employee performance." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left Side: Header & Image */}
          <div className="lg:w-1/2">
            <h2 className="text-[32px] md:text-[56px] font-serif font-bold text-dosteon-black leading-tight mb-6">
              Why Choose Dosteon?
            </h2>
            <p className="text-dosteon-gray text-lg font-medium mb-12 max-w-xl leading-relaxed">
              The right tools make building and scaling your business simpler and more sustainable.
            </p>
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
              <img 
                src={chefImage} 
                alt="Chef preparing food" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>
            </div>
          </div>

          {/* Right Side: Numbered Points */}
          <div className="lg:w-1/2 space-y-12 py-6">
            {points.map((point) => (
              <div key={point.num} className="flex gap-8 group">
                <span className="text-primary font-serif font-bold text-3xl md:text-5xl opacity-40 group-hover:opacity-100 transition-opacity">
                  {point.num}
                </span>
                <div className="border-b border-gray-100 pb-8 flex-1">
                  <h4 className="text-xl md:text-2xl font-bold mb-3 text-dosteon-black group-hover:text-primary transition-colors">{point.title}</h4>
                  <p className="text-dosteon-gray text-base leading-relaxed font-medium">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDosteon;
