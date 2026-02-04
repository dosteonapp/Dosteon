import React from 'react';

const ValueCards = () => {
  const cards = [
    {
      title: "Better Management",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
        </svg>
      ),
      description: "Dosteon gives you professional-looking systems that automate and help manage your tasks."
    },
    {
      title: "More order",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2l-1.5 1.5L7.5 2L6 3.5 4.5 2 3 3.5V22z"/>
        </svg>
      ),
      description: "Eliminate confusion with real-time stock lists and orders that are accurate."
    },
    {
      title: "Build with ease",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
      ),
      description: "No coding. No complicated setup. Build your unique business system in minutes."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[48px] font-serif font-bold text-dosteon-black mb-4">Quality Results</h2>
          <p className="text-dosteon-gray text-lg font-medium">Professional tools designed for your success</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="bg-[#EFF6FF] w-14 h-14 rounded-xl flex items-center justify-center mb-8">
                {card.icon}
              </div>
              <h3 className="text-[22px] font-bold mb-4 text-dosteon-black">{card.title}</h3>
              <p className="text-dosteon-gray leading-relaxed text-base font-medium">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCards;
