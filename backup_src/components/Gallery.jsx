import React from 'react';

const Gallery = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-[40px] overflow-hidden aspect-21/9 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541529086526-db283c563270?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Food spread" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
