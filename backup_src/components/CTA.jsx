import bgImage from '../assets/below-image.jpg';

const CTA = () => {
  return (
    <section className="py-24 md:py-44 relative bg-[#1C1C1C] text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Food background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/60"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-[42px] md:text-[84px] font-serif font-bold mb-10 leading-[1.1] max-w-5xl mx-auto tracking-tight">
          Food systems shouldn't <br className="hidden md:block" /> be fragile.
        </h2>
        <p className="text-gray-300 text-lg md:text-[22px] max-w-2xl mx-auto mb-14 font-medium opacity-90 leading-relaxed">
          Join thousands of businesses that trust Dosteon to manage their operations with resilience and efficiency.
        </p>
        <button className="bg-white text-primary hover:bg-gray-100 px-12 py-5 rounded-2xl text-[18px] font-bold transition-all shadow-2xl hover:scale-105 active:scale-95">
          Build your system
        </button>
      </div>
    </section>
  );
};

export default CTA;
