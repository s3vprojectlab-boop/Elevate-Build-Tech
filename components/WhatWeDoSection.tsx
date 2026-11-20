import React from "react";

export default function WhatWeDoSection() {
  const disciplines = [
    {
      number: "01",
      title: "Architecture",
      tagline: "Where every project begins.",
      description:
        "Thoughtful planning and considered spaces, shaped around the way you live and work.",
      deliverables: [
        "Concept & Space Planning",
        "Architectural Design",
        "Site Plan & 3D Visualization",
      ],
    },
    {
      number: "02",
      title: "Construction",
      tagline: "The structure rising.",
      description:
        "Turning the design into built reality, with care for materials, workmanship and every detail.",
      deliverables: [
        "Civil Construction",
        "Material Coordination",
        "Site Execution",
      ],
    },
    {
      number: "03",
      title: "Project Management",
      tagline: "The thread that connects it all.",
      description:
        "Connecting people, plans and decisions from the first sketch to the final handover.",
      deliverables: [
        "Project Coordination",
        "Schedule & Cost Planning",
        "Quality & Site Review",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#121316] text-white border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
                02 / What We Do
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight">
              Design. Build. Deliver.
            </h2>
          </div>

          <p className="text-sm md:text-base text-[#9ca3af] font-normal tracking-wide max-w-sm">
            Integrated expertise. A single, clear voice.
          </p>
        </div>

        {/* 3 Discipline Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {disciplines.map((item) => (
            <div
              key={item.number}
              className="flex flex-col justify-between group pt-4"
            >
              <div>
                {/* Discipline Index Number */}
                <span className="block text-sm font-semibold tracking-[0.2em] text-[#c4683a] mb-6">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-normal text-white mb-2 group-hover:text-[#c4683a] transition-colors">
                  {item.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-[#71717a] font-normal mb-6">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-10">
                  {item.description}
                </p>
              </div>

              {/* Specific Deliverables List */}
              <div className="pt-6 border-t border-white/[0.08] space-y-2">
                {item.deliverables.map((d, idx) => (
                  <p
                    key={idx}
                    className="text-xs uppercase tracking-[0.16em] text-[#71717a] group-hover:text-[#d4d4d8] transition-colors"
                  >
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
