"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const XLogo = ({ size = 18, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    aria-hidden="true" 
    className={className}
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.313 17.404z" />
  </svg>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const socialIcons = [
    { icon: Linkedin, href: "#", fill: true },
    { icon: Instagram, href: "#" },
    { icon: XLogo, href: "#" },
    { icon: Facebook, href: "#", fill: true },
  ];

  return (
    <>
      <nav
        className="fixed top-4 left-0 right-0 z-100 transition-all duration-300 px-5 sm:px-6 lg:px-8"
      >
        <div
          className={`max-w-8-5xl mx-auto rounded-[24px] transition-all duration-300 ${
            isScrolled || isOpen
              ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2.5"
              : "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3"
          } px-6 md:px-8 flex items-center justify-between relative`}
        >
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img 
              src="/assets/logo.png" 
              alt="Dosteon Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu - Center */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <Link
              href="/contact"
              className="text-secondary hover:text-primary font-figtree font-semibold text-base transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Menu - Right */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button>Get Early Access</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-secondary p-2 transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 bg-white flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-12 w-full px-5">
              <Link
                href="/contact"
                className="text-secondary font-figtree font-semibold text-2xl"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>

              <Link href="/contact" className="w-full max-w-sm" onClick={() => setIsOpen(false)}>
                <Button className="w-full py-5 text-xl rounded-2xl flex items-center justify-center gap-2">
                  Get Early Access <ArrowRight size={24} />
                </Button>
              </Link>

              <div className="flex items-center gap-8 mt-4">
                {socialIcons.map((item, idx) => (
                  <Link key={idx} href={item.href} className="text-secondary/80 hover:text-secondary transition-colors">
                    <item.icon size={28} fill={item.fill ? "currentColor" : "none"} />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
