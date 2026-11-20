import React from "react";
import Image from "next/image";

export default function YourProjectSection() {
  return (
    <section
      id="your-project"
      className="relative bg-[#16171a] text-white border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Left Column: Dark Container */}
          <div className="lg:col-span-7 px-8 md:px-14 lg:px-16 py-20 lg:py-28 flex flex-col justify-center">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
                03 / Your Project
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight leading-[1.15] mb-8">
              A considered space.
              <span className="block font-normal">A connected team.</span>
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-[#9ca3af] font-normal leading-relaxed max-w-xl mb-10">
              Whether you are shaping a home or planning a place for your business,
              start with a conversation. We bring design, build and delivery into
              one team, not three hand-offs.
            </p>

            {/* Interactive consultation link */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:text-[#c4683a] transition-colors group"
              >
                <span>Initiate a Conversation</span>
                <span className="w-8 h-[1px] bg-white group-hover:bg-[#c4683a] transition-colors" />
                <span className="text-[#c4683a] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature Terracotta Accent Block */}
          <div className="lg:col-span-5 bg-[#c4683a] text-[#111111] p-8 md:p-12 lg:p-14 flex flex-col justify-between relative shadow-2xl">
            {/* Top Tag */}
            <div className="text-xs font-bold tracking-[0.22em] uppercase text-[#111111]/90">
              One vision, from the ground up.
            </div>

            {/* Center Architectural Brand Symbol */}
            <div className="my-10 flex items-center justify-center">
              <Image
                src="/ebt-symbol-black.png"
                alt="Elevate Build Tech Symbol"
                width={1152}
                height={1088}
                className="w-full max-w-[260px] sm:max-w-[300px] h-auto object-contain"
              />
            </div>

            {/* Bottom Disciplines Tag */}
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#111111]/90 pt-6 border-t border-[#111111]/15">
              Architecture / Construction / PMC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
