"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you handle both architectural design and on-site civil construction?",
      a: "Yes. Elevate Build Tech is an integrated firm. That means our architects, structural engineers, and site execution contractors work under one unified team. This eliminates the common blame game between architects and third-party contractors and ensures what is drawn on paper is executed precisely on site.",
    },
    {
      q: "How do you engineer buildings for the heavy Malnad monsoon climate?",
      a: "The Western Ghats receive substantial rainfall. We integrate deep overhang eaves, specialized multi-layer foundation waterproofing, sloping roof profiles, damp-proof courses, and optimized natural cross-ventilation to prevent moisture retention and ensure structural longevity for generations.",
    },
    {
      q: "What is Project Management Consultancy (PMC) and why is it essential?",
      a: "PMC is your independent quality assurance and financial control team. We oversee vendor procurement, conduct rigorous lab testing on cement and steel, verify contractor bills before payment, and ensure the project remains strictly within the scheduled timeline and budget.",
    },
    {
      q: "How do you prevent budget overruns and unexpected hidden costs?",
      a: "Before a single brick is laid, we provide a complete, computerized Bill of Quantities (BOQ) with fixed itemized rates. Every milestone is pre-agreed with transparent payment schedules linked directly to certified on-site progress.",
    },
    {
      q: "Can you assist with local municipal approvals and plan sanctions in Sagar?",
      a: "Yes. Our team assists with preparing sanction-compliant architectural drawings, structural safety certificates, and documentation required for Sagar City Municipality (CMC) and local Gram Panchayat building permissions.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#0e0f12] text-white border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight">
            Building With Confidence
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-4 max-w-lg mx-auto leading-relaxed">
            Everything you need to know about starting an architectural or construction project with our Sagar studio.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="border border-white/[0.08] bg-[#141518] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-normal text-white group-hover:text-[#c4683a] transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-[#c4683a] flex-shrink-0">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#a1a1aa] leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-8 bg-[#16171a] border border-white/[0.08] text-center space-y-3">
          <h3 className="font-display text-xl font-normal text-white">
            Have a unique site or project requirement?
          </h3>
          <p className="text-xs text-[#9ca3af] max-w-md mx-auto">
            Our principal architects and project leads in Sagar are available for one-on-one consultations.
          </p>
          <a
            href="#contact"
            className="inline-block mt-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#c4683a] hover:underline"
          >
            Schedule a Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
