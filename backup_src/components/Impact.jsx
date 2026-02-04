import sdg1 from '../assets/1.png';
import sdg2 from '../assets/2.png';
import sdg3 from '../assets/3.png';
import sdg4 from '../assets/4.png';

const Impact = () => {
  const impacts = [
    { title: "Zero Hunger", color: "bg-[#E5A746]", img: sdg1 },
    { title: "Decent Work and economic growth", color: "bg-[#A31C44]", img: sdg2 },
    { title: "Industry Innovation and Infrastructure", color: "bg-[#F26A2E]", img: sdg3 },
    { title: "Responsible Consumption and Production", color: "bg-[#BF8B2E]", img: sdg4 },
  ];

  return (
    <section className="py-24 bg-[#EFF6F2]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-16">
           <h2 className="text-[32px] md:text-[52px] font-serif font-bold text-dosteon-black leading-tight mb-4">
            SDG Alignment
          </h2>
          <p className="text-dosteon-gray text-[18px] md:text-[20px] font-medium opacity-80 leading-relaxed">
            As a platform we are committed to sustainable business values and the United Nations Sustainable Development Goals.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {impacts.map((impact, index) => (
            <div key={index} className={`${impact.color} w-32 h-32 md:w-56 md:h-56 rounded-[24px] flex flex-col items-center justify-center p-4 md:p-8 shadow-xl hover:-translate-y-2 transition-all duration-300 group`}>
              <div className="w-full h-full flex items-center justify-center">
                <img src={impact.img} alt={impact.title} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
