import React from "react";
import Image from "next/image";
import { ShieldCheck, TrendingUp, FileCheck2, Compass } from "lucide-react";

export default function AimsGoalsSection() {
  const goals = [
    {
      num: "01",
      title: "Integration",
      subtitle: "One team, not three hand-offs.",
      desc: "Traditional builds suffer when architects and contractors work in silos. Our aim is total integration—designers, civil engineers, and project managers collaborating daily from sketch to key handover.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "Elevation",
      subtitle: "Each structure standing higher than the last.",
      desc: "The literal and philosophical meaning of our name. We aim to elevate architectural standards across Sagar and the Malnad region through contemporary design and unyielding structural integrity.",
      icon: TrendingUp,
    },
    {
      num: "03",
      title: "Certainty",
      subtitle: "The frame that holds it all together.",
      desc: "No hidden escalations, no compromised materials. Through rigorous Project Management Consultancy (PMC), computerized BOQs, and independent QA testing, we deliver schedule and cost certainty.",
      icon: FileCheck2,
    },
    {
      num: "04",
      title: "Grounding",
      subtitle: "Rooted in the ground everything stands on.",
      desc: "We design specifically for the torrential monsoon seasons and topography of the Western Ghats, blending local laterite, exposed concrete, and engineered timber into spaces built to endure generations.",
      icon: Compass,
    },
  ];

  return (
    <section
      id="aims-goals"
      className="py-24 md:py-32 bg-[#111214] text-white border-t border-white/[0.08] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 pb-10 border-b border-white/[0.08]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#C2703D] text-xs font-semibold tracking-[0.24em] uppercase">
                Purpose & Philosophy
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.12]">
              Our Aims & Goals.
              <span className="block font-normal text-white">Built to rise without compromise.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Three disciplines. One structure.
              <br />
              <span className="text-[#C2703D] font-medium tracking-wide">
                Volume 01 · Brand Identity & Ethos
              </span>
            </p>
          </div>
        </div>

        {/* Vision Statement Hero Card */}
        <div className="bg-[#18191d] border border-white/[0.08] p-8 md:p-14 mb-20 relative overflow-hidden">
          {/* Subtle copper accent strip */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#C2703D]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold tracking-[0.22em] text-[#C2703D] block">
                The Company Aim
              </span>
              <p className="font-display text-2xl sm:text-3xl font-light text-white leading-relaxed">
                “To replace fragmented, disconnected building practices with a unified discipline. 
                We ensure that what begins as an inspired sketch is delivered as an enduring built reality.”
              </p>
              <p className="text-sm text-[#9ca3af] pt-2">
                Elevate Build Tech — Operating across Sagar, Shivamogga, and the Malnad corridor.
              </p>
            </div>

            {/* Ascending Geometry Mini-Illustration */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="w-44 sm:w-52 md:w-56 h-auto flex items-center justify-center">
                <Image
                  src="/ebt-symbol-ivory-copper.png"
                  alt="Elevate Build Tech Symbol"
                  width={1152}
                  height={1088}
                  className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#141518] border border-white/[0.08] hover:border-[#C2703D]/60 p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="font-display text-sm font-bold tracking-[0.2em] text-[#C2703D]">
                      Goal {item.num}
                    </span>
                    <Icon size={20} className="text-[#C2703D] opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="font-display text-2xl font-light text-white mb-2 group-hover:text-[#C2703D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-[#71717a] mb-6 tracking-wide">
                    {item.subtitle}
                  </p>

                  <p className="text-sm text-[#9ca3af] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2703D]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#71717a]">
                    Strategic Pillar
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
