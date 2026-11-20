import React from "react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover",
      description:
        "Your ideas. Your site. Your ambition. We begin by understanding what matters.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "A clear design direction, developed through plans, materials and details.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Coordinated execution, keeping the vision connected to the work on site.",
    },
    {
      step: "04",
      title: "Deliver",
      description:
        "The finishing details come together. A space ready for its next chapter.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative py-24 md:py-32 bg-[#0e0f12] text-white border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
              04 / How We Work
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight">
            From first sketch to final handover.
          </h2>
        </div>

        {/* 4 Process Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between pt-6 border-t border-white/[0.12] group hover:border-[#c4683a] transition-colors duration-300"
            >
              {/* Step indicator number */}
              <span className="text-xs font-semibold tracking-[0.2em] text-[#71717a] group-hover:text-[#c4683a] transition-colors mb-8">
                {item.step}
              </span>

              {/* Title & Description */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-normal text-white mb-4 group-hover:translate-x-0.5 transition-transform">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Architectural accent marker */}
              <div className="mt-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#c4683a] transition-colors" />
                <span className="text-[10px] uppercase tracking-widest text-[#52525b] group-hover:text-[#a1a1aa] transition-colors">
                  Stage {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
