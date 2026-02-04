"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-secondary text-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16 md:mb-20">
          {/* Logo and Tagline Column */}
          <div className="md:max-w-md">
            <Link href="/" className="inline-block mb-6 md:mb-8">
              <img 
                src="/assets/logo.png" 
                alt="Dosteon Logo" 
                className="h-8 md:h-10 w-auto brightness-0 invert"
              />
            </Link>
            
            <p className="text-gray-400 font-figtree font-medium italic mb-6 leading-relaxed text-[15px] md:text-[16px]">
              Built for Africa. Designed for Scale. Powered by Intelligence.
            </p>
            
            <p className="text-gray-400 font-figtree text-[14px] md:text-[15px] leading-relaxed max-w-sm mb-8 md:mb-0">
              The operating system for Africa’s food supply chain, built for restaurants, cafés, and suppliers to grow together.
            </p>

            {/* Social Icons - Mobile Only (Stacks before lists) */}
            <div className="flex md:hidden items-center gap-6 mb-12">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} fill="currentColor" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} fill="currentColor" />
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} fill="currentColor" />
              </Link>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-24">
            {navColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-figtree font-bold text-[16px] mb-5 md:mb-6 text-white">
                  {col.title}
                </h4>
                <ul className="space-y-3 md:space-y-4">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white text-[15px] font-figtree transition-colors duration-200"
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
        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-[13px] md:text-[14px] font-figtree order-3 md:order-1">
            © {currentYear} Dosteon. All rights reserved.
          </p>

          {/* Secondary Links */}
          <div className="flex items-center gap-6 md:gap-8 order-2 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-white text-[13px] md:text-[14px] font-figtree transition-colors font-medium">
              Terms
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-[13px] md:text-[14px] font-figtree transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-[13px] md:text-[14px] font-figtree transition-colors font-medium">
              Status
            </Link>
          </div>

          {/* Social Icons - Desktop Only */}
          <div className="hidden md:flex items-center gap-6 order-3">
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              <Linkedin size={20} fill="currentColor" />
            </Link>
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              <Twitter size={20} fill="currentColor" />
            </Link>
            <Link href="#" className="text-white/80 hover:text-white transition-colors">
              <Facebook size={20} fill="currentColor" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
