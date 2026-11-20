"use client";

import React, { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { triggerWorkModal } from "./WorkModalController";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("ALL");

  const portfolio = [
    {
      id: "malnad-courtyard",
      title: "The Malnad Courtyard Residence",
      category: "ARCHITECTURE",
      type: "Residential Villa",
      area: "4,200 sq.ft",
      location: "Sagar, Karnataka",
      desc: "Contemporary climate-responsive courtyard villa harmonizing exposed laterite stone masonry, teakwood joinery, and natural ventilation voids.",
      highlights: ["Central Atrium Garden", "Rainwater Harvesting", "Passive Cooling"],
    },
    {
      id: "ghats-eco-pavilion",
      title: "Ghats Edge Eco-Pavilion",
      category: "CONSTRUCTION",
      type: "Bespoke Retreat",
      area: "6,800 sq.ft",
      location: "Jog Falls Corridor, Malnad",
      desc: "Engineered timber trusses and basalt foundation masonry built specifically to withstand heavy Western Ghats monsoon precipitation.",
      highlights: ["Seismic-Engineered Steel", "Weather-Sealed Concrete", "Natural Quarry Stone"],
    },
    {
      id: "sagar-commercial-center",
      title: "Town Center Commercial Landmark",
      category: "PMC",
      type: "Commercial Hub",
      area: "18,500 sq.ft",
      location: "Main Road, Sagar",
      desc: "Delivered strictly on schedule through comprehensive PMC management, material QA testing, vendor coordination, and daily site reporting.",
      highlights: ["Multi-Level Retail", "Full PMC Supervision", "On-Time Handover"],
    },
    {
      id: "areca-valley-homestead",
      title: "Areca Valley Homestead",
      category: "TURNKEY",
      type: "Turnkey Farmhouse",
      area: "3,500 sq.ft",
      location: "Soraba Road, Sagar",
      desc: "Minimalist open-plan farmhouse designed to frame panoramic views of surrounding arecanut groves while maintaining solar insulation.",
      highlights: ["Turnkey Delivery", "Landscape Integration", "High Thermal Mass"],
    },
  ];

  const filtered =
    filter === "ALL"
      ? portfolio
      : portfolio.filter((p) =>
          filter === "ARCHITECTURE"
            ? p.category === "ARCHITECTURE"
            : filter === "CONSTRUCTION"
            ? p.category === "CONSTRUCTION"
            : p.category === "PMC" || p.category === "TURNKEY"
        );

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0e0f12] text-white border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
                Featured Works
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight">
              Selected Built Environments
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "All Works", val: "ALL" },
              { label: "Architecture", val: "ARCHITECTURE" },
              { label: "Construction", val: "CONSTRUCTION" },
              { label: "PMC & Turnkey", val: "PMC" },
            ].map((f) => (
              <button
                key={f.val}
                type="button"
                onClick={() => setFilter(f.val)}
                className={`text-xs uppercase tracking-[0.16em] px-4 py-2 transition-all ${
                  filter === f.val
                    ? "bg-[#c4683a] text-white font-medium shadow-md shadow-[#c4683a]/20"
                    : "bg-white/[0.03] text-[#9ca3af] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#141518] border border-white/[0.08] hover:border-[#c4683a]/60 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
            >
              <div>
                {/* Meta details header */}
                <div className="flex items-center justify-between text-xs tracking-wider mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="text-[#c4683a] font-semibold uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                  <span className="text-[#71717a] flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#c4683a]" />
                    {item.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-light text-white group-hover:text-[#c4683a] transition-colors mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-[#a1a1aa] mb-4">
                  <span>{item.type}</span>
                  <span>•</span>
                  <span>{item.area}</span>
                </div>

                <p className="text-sm text-[#9ca3af] leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/[0.04] text-[#d4d4d8] border border-white/[0.05]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-[#71717a] tracking-wider uppercase">
                  Completed Project
                </span>
                <button
                  type="button"
                  onClick={triggerWorkModal}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white group-hover:text-[#c4683a] transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
