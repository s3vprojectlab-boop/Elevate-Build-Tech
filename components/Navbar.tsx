"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "STUDIO", href: "#studio" },
    { name: "AIMS & GOALS", href: "#aims-goals" },
    { name: "PROJECTS", href: "#projects" },
    { name: "SERVICES", href: "#services" },
    { name: "ESTIMATOR", href: "#estimator" },
    { name: "HOW WE WORK", href: "#how-we-work" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(14, 15, 18, 0.98)" : "rgba(14, 15, 18, 0.92)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b ${
        scrolled
          ? "border-white/[0.12] py-3.5 shadow-2xl shadow-black/50"
          : "border-white/[0.06] py-5 shadow-lg shadow-black/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-12 flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          aria-label="Elevate Build Tech Home"
          className="inline-flex items-center flex-shrink-0 group select-none transition-opacity duration-200 hover:opacity-90 py-1"
        >
          <Image
            src="/ebt-horizontal-ivory-copper.png"
            alt="Elevate Build Tech"
            width={3272}
            height={672}
            className="h-8 md:h-9 xl:h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-shrink-0">
          <nav className="flex items-center gap-3.5 xl:gap-5 2xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] xl:text-[11px] uppercase font-medium tracking-[0.12em] xl:tracking-[0.16em] 2xl:tracking-[0.18em] text-[#d4d4d8] hover:text-white transition-colors relative py-1.5 whitespace-nowrap group ${
                  link.name === "CONTACT" ? "hidden xl:inline-block" : ""
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c4683a] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="px-3.5 xl:px-4 py-1.5 xl:py-2 border border-[#c4683a] bg-[#c4683a]/15 hover:bg-[#c4683a] text-white text-[10px] xl:text-[11px] uppercase tracking-[0.12em] xl:tracking-[0.16em] 2xl:tracking-[0.18em] font-medium transition-all whitespace-nowrap inline-flex items-center justify-center shadow-sm"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href="tel:+919019708760"
            className="p-2 text-[#c4683a] hover:text-white transition-colors"
            aria-label="Call studio"
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121316] border-b border-white/10 px-6 py-8 animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-[#c4683a] py-2.5 border-b border-white/[0.05] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#c4683a] text-white text-center text-xs uppercase tracking-[0.2em] font-medium"
              >
                Start a Project
              </a>
              <a
                href="tel:+919019708760"
                className="text-center text-xs tracking-wider text-[#9ca3af] hover:text-white py-2 flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-[#c4683a]" />
                +91 90197 08760
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
