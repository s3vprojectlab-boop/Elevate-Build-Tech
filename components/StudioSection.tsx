import React from "react";

export default function StudioSection() {
  return (
    <section
      id="studio"
      className="relative py-24 md:py-32 bg-[#f4f0e8] text-[#1a1a1a] border-t border-[#ded7c8] bg-cream-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Index & Big Statement */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {/* Section Tag */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
                01 / The Studio
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#1a1a1a] tracking-tight leading-[1.12]">
              Three disciplines.
              <span className="block font-normal">One structure.</span>
              <span className="block font-light text-[#c4683a]">Always rising.</span>
            </h2>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2 lg:pt-14 space-y-8">
            <div className="space-y-6">
              {/* Secondary Subhead */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1a1a1a] leading-snug">
                Elevating spaces through design,
                <br className="hidden sm:inline" /> engineering and construction excellence.
              </h3>

              {/* Body Copy */}
              <p className="text-base text-[#4a4642] leading-relaxed max-w-xl">
                Based in Sagar, Karnataka, Elevate Build Tech brings architecture,
                construction and project management together. One team, from the
                first idea to the space you call your own.
              </p>
            </div>

            {/* Territorial Stamp & Divider */}
            <div className="pt-8 border-t border-[#ded7c8] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#c4683a]">
                Rooted in Sagar · Building Across Malnad
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#78716c] font-medium">
                Founder & CEO · Samartha B P
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
