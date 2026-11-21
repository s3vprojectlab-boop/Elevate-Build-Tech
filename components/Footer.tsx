import React from "react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "STUDIO", href: "#studio" },
    { name: "AIMS & GOALS", href: "#aims-goals" },
    { name: "SERVICES", href: "#services" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ESTIMATOR", href: "#estimator" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0b0c0e] text-white border-t border-white/[0.08] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Left Column: Brand & Value Tagline */}
          <div className="md:col-span-6 space-y-6">
            <Logo />

            <p className="text-sm text-[#9ca3af] leading-relaxed max-w-sm">
              Elevating spaces through design,
              <br />
              engineering and construction.
            </p>

            <p className="text-[10px] uppercase tracking-[0.22em] text-[#71717a]">
              Founder · <span className="text-[#a1a1aa]">Samartha B P</span>
            </p>
          </div>

          {/* Right Column: Navigation & Location */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between sm:justify-end gap-10 sm:gap-16">
            {/* Quick Links */}
            <div className="space-y-3">
              <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-[#71717a] mb-2">
                Navigation
              </span>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-xs uppercase tracking-[0.18em] text-[#a1a1aa] hover:text-[#c4683a] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Contact Coordinates */}
            <div className="space-y-3">
              <span className="block text-[10px] font-bold tracking-[0.25em] uppercase text-[#71717a] mb-2">
                Location & Inquiries
              </span>
              <p className="text-xs text-[#a1a1aa] tracking-wider leading-relaxed">
                Sagar, Karnataka – 577401
              </p>
              <a
                href="tel:+919019708760"
                className="block text-xs text-[#e4e4e7] hover:text-[#c4683a] tracking-wider transition-colors"
              >
                +91 90197 08760
              </a>
              <a
                href="mailto:elevatebuildtech02@gmail.com"
                className="block text-xs text-[#71717a] hover:text-white transition-colors"
              >
                elevatebuildtech02@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Motto */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-[#71717a]">
          <p>© {currentYear} Elevate Build Tech. All rights reserved.</p>
          <p className="text-[#a1a1aa] font-medium tracking-[0.25em]">
            Design · Build · Elevate
          </p>
        </div>
      </div>
    </footer>
  );
}
