"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { triggerWorkModal } from "./WorkModalController";

export default function Hero() {
  const scrollToStudio = () => {
    const el = document.getElementById("studio");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-32 lg:pt-36 flex flex-col justify-between bg-[#111214] overflow-hidden bg-grid-subtle">
      {/* Top / Main Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-1 py-12">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          {/* Discipline Category Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#C2703D] text-xs font-semibold tracking-[0.24em] uppercase">
              Architecture · Construction · PMC
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08] mb-8">
            Spaces designed to
            <span className="block font-normal text-white">rise.</span>
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-[#9ca3af] font-normal leading-relaxed max-w-xl mb-10">
            One team from first sketch to final handover, building across
            Sagar and the Malnad region.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C2703D] hover:bg-[#a9542a] text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 shadow-lg shadow-[#C2703D]/15 hover:shadow-[#C2703D]/30 active:scale-[0.99]"
            >
              Start a Project
            </a>
            <button
              type="button"
              onClick={triggerWorkModal}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-white/25 hover:border-white text-white/90 hover:text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 hover:bg-white/[0.04] active:scale-[0.99]"
            >
              View Work
            </button>
          </div>
        </div>

        {/* Right Column: Architectural Hero Symbol Graphic */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
            {/* Subtle architectural ambient backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C2703D]/15 via-transparent to-white/[0.04] rounded-full blur-3xl pointer-events-none" />

            <Image
              src="/ebt-symbol-ivory-copper.png"
              alt="Elevate Build Tech Architectural Symbol"
              width={1152}
              height={1088}
              priority
              className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Architectural Ticker Bar */}
      <div className="w-full border-t border-white/[0.08] bg-[#111214]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#71717a]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2703D] inline-block animate-pulse" />
            <span>Sagar, Karnataka · India</span>
          </div>

          <button
            onClick={scrollToStudio}
            className="flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors group cursor-pointer focus:outline-none"
          >
            <span className="group-hover:text-[#C2703D] transition-colors">
              Explore Our Studio
            </span>
            <ArrowDown
              size={13}
              className="transform group-hover:translate-y-0.5 transition-transform text-[#C2703D]"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
