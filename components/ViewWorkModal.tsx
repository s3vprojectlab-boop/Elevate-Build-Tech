"use client";

import React, { useState } from "react";
import { X, ArrowRight, ExternalLink } from "lucide-react";

interface ViewWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewWorkModal({ isOpen, onClose }: ViewWorkModalProps) {
  const [activeFilter, setActiveFilter] = useState("ALL");

  if (!isOpen) return null;

  const projects = [
    {
      id: "malnad-courtyard",
      title: "The Malnad Courtyard Residence",
      category: "ARCHITECTURE",
      type: "Residential Villa · 4,200 sq.ft",
      location: "Sagar, Karnataka",
      desc: "A contemporary climate-responsive courtyard home harmonizing regional laterite stone, sloping tile roofs, and indoor-outdoor garden voids.",
      scope: "Full Architectural Design & Space Planning",
    },
    {
      id: "western-ghats-pavilion",
      title: "Ghats Edge Eco-Pavilion",
      category: "CONSTRUCTION",
      type: "Bespoke Retreat · 6,800 sq.ft",
      location: "Jog Falls Corridor, Malnad",
      desc: "Engineered timber trusses, exposed basalt masonry, and high-performance rainwater harvesting integrated into heavy-rainfall topography.",
      scope: "Civil Construction & Structural Execution",
    },
    {
      id: "sagar-commercial-landmark",
      title: "Sagar Commercial Center",
      category: "PMC",
      type: "Commercial Hub · 18,500 sq.ft",
      location: "Town Center, Sagar",
      desc: "Delivered strictly on schedule through comprehensive PMC oversight, vendor management, rigorous material testing, and QA audits.",
      scope: "Full Project Management Consultancy (PMC)",
    },
    {
      id: "plantation-homestead",
      title: "Areca Valley Homestead",
      category: "ARCHITECTURE",
      type: "Turnkey Residence · 3,500 sq.ft",
      location: "Soraba Road, Sagar",
      desc: "Minimalist open-plan farmhouse designed to capture cross ventilation and frame panoramic views of surrounding arecanut groves.",
      scope: "Turnkey Design & Build Delivery",
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141518] border border-white/10 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-6 border-b border-white/10 bg-[#0e0f12]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#c4683a] block mb-1">
              Elevate Portfolio Showcase
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-light text-white">
              Selected Works & Built Environments
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/5 rounded transition-colors"
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 px-6 sm:px-8 py-3 bg-[#111215] border-b border-white/[0.06] overflow-x-auto">
          {["ALL", "ARCHITECTURE", "CONSTRUCTION", "PMC"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 transition-colors ${
                activeFilter === f
                  ? "bg-[#c4683a] text-white font-medium"
                  : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 divide-y divide-white/[0.06]">
          {filteredProjects.map((project) => (
            <div key={project.id} className="pt-6 first:pt-0 group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4683a]">
                    {project.category} · {project.location}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-normal text-white group-hover:text-[#c4683a] transition-colors mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#71717a] mt-0.5">{project.type}</p>
                </div>
                <div className="text-xs uppercase tracking-wider text-[#9ca3af] bg-white/[0.03] px-3 py-1.5 border border-white/[0.08] self-start sm:self-auto">
                  {project.scope}
                </div>
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mt-3 max-w-2xl">
                {project.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-[#0e0f12] flex items-center justify-between text-xs tracking-wider text-[#71717a]">
          <span>Building with precision in Sagar & Malnad region</span>
          <a
            href="#contact"
            onClick={onClose}
            className="text-[#c4683a] hover:underline uppercase tracking-[0.16em] font-medium"
          >
            Discuss a new build →
          </a>
        </div>
      </div>
    </div>
  );
}
