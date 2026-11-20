import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProfileBanner() {
  return (
    <section className="relative w-full bg-[#111215] border-y border-white/[0.08] overflow-hidden my-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Signature Statement */}
          <div className="lg:col-span-7 z-10 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4683a]" />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#c4683a]">
                Elevate Build Tech Studio
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-[1.18] max-w-2xl">
              Elevating spaces through design,
              <span className="block font-normal text-white">engineering and construction.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9ca3af] max-w-lg leading-relaxed pt-2">
              Harmonizing architectural vision with on-ground structural precision across Sagar and the Western Ghats region.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#c4683a] hover:text-white transition-colors group"
              >
                <span>Start Your Build</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Architectural Copper Brand Symbol Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] aspect-square flex items-center justify-center">
              {/* Subtle ambient copper glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c4683a]/15 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

              <Image
                src="/ebt-symbol-copper.png"
                alt="Elevate Build Tech Copper Symbol"
                width={1152}
                height={1088}
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
