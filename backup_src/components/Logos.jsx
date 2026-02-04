import React from 'react';

const Logos = () => {
  const brands = [
    { name: 'Kfc', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png' },
    { name: 'Burger King', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1200px-Burger_King_2020.svg.png' },
    { name: 'Subway', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/1200px-Subway_2016_logo.svg.png' },
    { name: 'Taco Bell', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png' },
    { name: 'Starbucks', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-60 transition-all duration-700">
          {brands.map((brand) => (
            <img key={brand.name} src={brand.logo} alt={brand.name} className="h-6 md:h-8 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
