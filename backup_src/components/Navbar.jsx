import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <nav className={`container mx-auto max-w-7xl nav-pill transition-all duration-300 pointer-events-auto flex justify-between items-center py-2 px-8 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Dosteon Logo" className="h-10 md:h-12 w-auto object-contain" />
          </div>
        </div>

        {/* Center link */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <a href="#" className="text-[14px] font-bold text-dosteon-gray hover:text-primary transition-colors uppercase tracking-wider">Contact Us</a>
        </div>

        {/* Call to Action */}
        <div>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl text-[14px] font-bold transition-all shadow-md active:scale-95 leading-none h-[44px] flex items-center">
            Build your System
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
