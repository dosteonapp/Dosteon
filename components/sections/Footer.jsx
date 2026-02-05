"use client";

import Link from "next/link";
import { Linkedin, Instagram, X, Facebook } from "lucide-react";

export function Footer({ variant = "dark" }) {
  const currentYear = new Date().getFullYear();
  const isWhite = variant === "white";

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/dosteon",
    instagram: "https://www.instagram.com/dosteonapp/",
    facebook: "https://www.facebook.com/dosteon",
    x: "https://x.com/Dosteon"
  };

  const navColumns = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Pricing", href: "#" },
        { label: "How it Works", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ];

  return (
    <footer className={`${isWhite ? "bg-white text-secondary" : "bg-secondary text-white"} pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t ${isWhite ? "border-gray-100" : "border-transparent"}`}>
      <div className={`container-custom ${isWhite ? "relative" : ""}`}>
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 md:mb-20">
          {/* Logo and Tagline Column */}
          <div className="md:max-w-md text-left">
            <Link href="/" className="inline-block mb-6 md:mb-8">
              <img 
                src="/assets/logo.png" 
                alt="Dosteon Logo" 
                className={`h-8 md:h-10 w-auto ${isWhite ? "brightness-0" : "brightness-0 invert"}`}
              />
            </Link>
            
            <p className={`${isWhite ? "text-gray-500/80" : "text-gray-400"} font-figtree font-medium italic mb-4 leading-relaxed text-[15px] md:text-[16px]`}>
              Built for Africa. Designed for Scale. Powered by Intelligence.
            </p>
            
            <p className={`${isWhite ? "text-gray-500/70" : "text-gray-400"} font-figtree text-[14px] md:text-[15px] leading-relaxed max-w-sm mb-8 md:mb-0`}>
              The operating system for Africa’s food supply chain, built for restaurants, cafés, and suppliers to grow together.
            </p>

            {/* Social Icons - Mobile Only (Stacks before lists) */}
            <div className={`flex md:hidden items-center gap-6 mb-12 ${isWhite ? "text-gray-500" : "text-white/80"}`}>
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Linkedin size={20} fill="currentColor" />
              </Link>
              <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href={socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <X size={20} />
              </Link>
              <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Facebook size={20} fill="currentColor" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-24 text-left">
            {navColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className={`font-figtree font-bold text-[13px] uppercase tracking-widest mb-6 md:mb-8 ${isWhite ? "text-secondary" : "text-white"}`}>
                  {col.title}
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href}
                        className={`${isWhite ? "text-gray-500/80 hover:text-secondary" : "text-gray-400 hover:text-white"} text-[14px] font-figtree transition-colors duration-200`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider Line */}
        <div className={`h-px w-full ${isWhite ? "bg-gray-200" : "bg-white/10"} mb-8 md:mb-10`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:pb-4">
          {/* Copyright */}
          <p className={`${isWhite ? "text-gray-500/70" : "text-gray-400"} text-[13px] md:text-[14px] font-figtree order-1`}>
            © {currentYear} Dosteon. All rights reserved.
          </p>

          {/* Secondary Links - Centered on desktop in white variant */}
          <div className={`flex items-center gap-6 md:gap-8 order-2 ${isWhite ? "md:absolute md:left-1/2 md:-translate-x-1/2" : ""}`}>
            <Link href="#" className={`${isWhite ? "text-gray-500/70 hover:text-secondary" : "text-gray-400 hover:text-white"} text-[12px] md:text-[13px] font-figtree transition-colors font-medium`}>
              Terms
            </Link>
            <Link href="#" className={`${isWhite ? "text-gray-500/70 hover:text-secondary" : "text-gray-400 hover:text-white"} text-[12px] md:text-[13px] font-figtree transition-colors font-medium`}>
              Privacy Policy
            </Link>
            <Link href="#" className={`${isWhite ? "text-gray-500/70 hover:text-secondary" : "text-gray-400 hover:text-white"} text-[12px] md:text-[13px] font-figtree transition-colors font-medium`}>
              Status
            </Link>
          </div>

          {/* Social Icons - Right aligned on desktop */}
          <div className={`flex items-center gap-6 order-3 ${isWhite ? "text-gray-500" : "text-white/80"}`}>
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={`hover:${isWhite ? "text-secondary" : "text-white"} transition-colors`}>
              <Linkedin size={18} fill="currentColor" />
            </Link>
            <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className={`hover:${isWhite ? "text-secondary" : "text-white"} transition-colors`}>
              <Instagram size={18} />
            </Link>
            <Link href={socialLinks.x} target="_blank" rel="noopener noreferrer" className={`hover:${isWhite ? "text-secondary" : "text-white"} transition-colors`}>
              <X size={18} />
            </Link>
            <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className={`hover:${isWhite ? "text-secondary" : "text-white"} transition-colors`}>
              <Facebook size={18} fill="currentColor" />
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
}
