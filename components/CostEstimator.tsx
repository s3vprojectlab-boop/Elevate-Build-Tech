"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, X, Shield, FileText, ChevronRight } from "lucide-react";

export default function CostEstimator() {
  const [area, setArea] = useState<number>(2500);
  const [tier, setTier] = useState<"standard" | "premium" | "luxury">("premium");
  const [scope, setScope] = useState<"turnkey" | "construction" | "architecture">("architecture");
  const [specModalTier, setSpecModalTier] = useState<"standard" | "premium" | "luxury" | null>(null);

  // Rates in INR per sq.ft based on Sagar & Malnad construction benchmarks
  const rates = {
    standard: {
      construction: 1799,
      architecture: 60,
      turnkey: 1799,
      months: "8 - 10 Months",
    },
    premium: {
      construction: 1999,
      architecture: 90,
      turnkey: 1999,
      months: "10 - 14 Months",
    },
    luxury: {
      construction: 2299,
      architecture: 140,
      turnkey: 2299,
      months: "14 - 18 Months",
    },
  };

  const selectedRate = rates[tier][scope];
  const totalCost = area * selectedRate;
  const isLakhs = totalCost >= 100000;
  const formattedCost = isLakhs
    ? (totalCost / 100000).toFixed(1)
    : totalCost.toLocaleString("en-IN");

  const getTimeline = () => {
    if (scope === "architecture") {
      if (area <= 800) return "2 - 3 Weeks";
      if (area <= 2500) return "3 - 5 Weeks";
      return "5 - 8 Weeks";
    }
    if (area <= 400) return "1 - 2 Months";
    if (area <= 800) return "3 - 5 Months";
    if (area <= 1500) return "6 - 9 Months";
    return rates[tier].months;
  };

  // Package definitions matching Homesphere Studio luxury model
  const packages = [
    {
      id: "standard" as const,
      name: "ECO BUDGET",
      badge: null,
      subtitle: "Standard Package",
      rate: rates.standard[scope],
      includesDesign: true,
      image: "/eco-budget-karnataka.jpg",
      description: "Solid civil framework & classic finishes for dependable family homes.",
      highlights: [
        "Architectural Floor Plans + Structural Engineering",
        "Standard 3D Exterior Elevation Renderings",
        "Verified Double-Charged Vitrified Tile Flooring",
        "Sal Wood Internal Frames & Designer Flush Doors",
        "Parapet Walls & Compound Wall Masonry",
        "Sagar Municipal (CMC) & Panchayat Approvals Support",
      ],
      architectureHighlights: [
        "2D Dimensioned Layouts",
        "Color-Rendered Furniture Plan",
        "Standard 3D Daylight View",
        "Foundation, Column & Beam Sheets",
        "Conduit & Switchboard Layout",
        "Supply & Drainage Routing",
      ],
      specifications: {
        structure: "ACC / Ultratech 43/53 grade cement, Fe500 grade TMT steel, solid concrete block masonry, 10' ceiling height.",
        flooring: "Branded vitrified tiles up to ₹60/sq.ft for living, bedrooms & dining. Anti-skid ceramic tiles for wet areas.",
        kitchen: "Black granite platform with stainless steel sink, ceramic wall tiles up to 2 feet above platform.",
        bathrooms: "Jaquar / Cera CP fittings, branded sanitaryware, ceramic wall tiles up to 7 feet height.",
        doorsWindows: "Teakwood main door frame with flush shutter. Aluminum powder-coated 2-track sliding windows.",
        electricals: "Finolex / Anchor fire-retardant wiring, GM modular switches, adequate points in all rooms.",
        painting: "Asian Paints Tractor Emulsion for interior with 2 coats putty, Apex weather-proof exterior paint.",
        warranty: "10-Year structural guarantee, 1-Year seepage & plumbing maintenance warranty.",
      },
    },
    {
      id: "premium" as const,
      name: "ECO STANDARD",
      badge: "MOST POPULAR",
      subtitle: "Premium Package",
      rate: rates.premium[scope],
      includesDesign: true,
      image: "/eco-standard-karnataka.jpg",
      description: "Architectural stone, teakwood joinery & glass tailored for Malnad climate.",
      highlights: [
        "Comprehensive Floor Plans + Structural Analysis",
        "Premium 3D Elevation + 4K Walkthrough Video",
        "Granite & Large-Format Premium Tile Flooring",
        "Burma Teakwood Main Door & Heavy uPVC Windows",
        "Full PMC Coordination & Daily Site Supervision",
        "Multi-Layer Foundation & Roof Waterproofing",
      ],
      architectureHighlights: [
        "2D Master Blueprints & Sections",
        "HD Presentation Layouts",
        "Premium 3D Elevation + 4K Walkthrough Video",
        "Seismic-Resistant RCC & BBS Schedules",
        "FRLS Conduit Schematics & EV Provision",
        "Dual-Piping & Greywater Slopes",
      ],
      specifications: {
        structure: "Ultratech / Birla Super cement, Tata Tiscon / Jindal Fe550 steel, engineered RCC frame, 10'6\" ceiling.",
        flooring: "Polished Granite / Large-slab vitrified tiles up to ₹110/sq.ft for living & dining; wooden-finish tile options.",
        kitchen: "Premium quartz / granite platform with double-bowl sink, designer tile dadoing up to 3 feet.",
        bathrooms: "Jaquar / Kohler premium diverters, wall-hung EWC, concealed cisterns, anti-skid granite threshold.",
        doorsWindows: "Pure Honne / Teakwood main door with carvings. UPVC 3-track sliding windows with mosquito mesh.",
        electricals: "Finolex FRLS concealed copper wiring, Legrand / Schneider modular switches, EV charger point provision.",
        painting: "Asian Paints Royale Luxury Emulsion for interiors, Ultima Protek weather-seal exterior shield.",
        warranty: "10-Year structural guarantee, 3-Year comprehensive waterproofing & plumbing warranty.",
      },
    },
    {
      id: "luxury" as const,
      name: "ECO PREMIUM",
      badge: "SIGNATURE ELITE",
      subtitle: "Ultra Premium Package",
      rate: rates.luxury[scope],
      includesDesign: true,
      image: "/eco-premium-karnataka.jpg",
      description: "Custom imported materials, smart home integration & bespoke luxury detailing.",
      highlights: [
        "Master Architectural Blueprint & MEP Layouts",
        "Ultra-HD Elevation + Cinematic Walkthrough",
        "Italian Marble / Custom Hardwood Flooring",
        "Intricate Carved Teak Doors & Acoustical Windows",
        "Smart Automation Pre-Wiring & Climate Protection",
        "Dedicated Principal Architect & Senior Site Lead",
      ],
      architectureHighlights: [
        "Bespoke Courtyard & Spatial Geometry",
        "Ultra-HD Photorealistic Finishes",
        "Premium 3D Elevation + Ultra-HD Elevation + Cinematic Walkthrough",
        "Heavy-Duty Seismic RCC & Foundation Vetting",
        "Smart Automation & Hybrid Solar Conduits",
        "Pressure-Boosted Lines & Water Recycling",
      ],
      specifications: {
        structure: "High-grade RMC M25/M30 concrete, Tata Tiscon Fe550D earthquake-resistant TMT, 11' grand ceiling heights.",
        flooring: "Imported Italian Marble / Composite Quartz / Exotic Hardwood up to ₹250/sq.ft in master & social suites.",
        kitchen: "Island kitchen counter readiness, premium quartz counters, sensor faucets, complete plumbing provision.",
        bathrooms: "Grohe / Kohler luxury collection fittings, frameless toughened glass shower cubicles, premium vanities.",
        doorsWindows: "Bespoke Burma Teak 8-foot entrance door with digital biometric lock. German-engineered soundproof uPVC.",
        electricals: "Complete smart automation conduits, Schneider touch switches, surge protection, solar hybrid readiness.",
        painting: "Asian Paints Royale Aspire / PU wood coatings, textured architectural feature walls, 3-layer exterior coat.",
        warranty: "15-Year structural guarantee, 5-Year zero-leakage waterproofing warranty with periodic audit.",
      },
    },
  ];

  const activeModalData = packages.find((p) => p.id === specModalTier);

  // Architecture-specific deliverable specifications for the modal
  const architectureModalSpecs = {
    standard: [
      { title: "2D Dimensioned Layouts", desc: "Comprehensive architectural layouts with precise room dimensions, space zoning, circulation mapping, and furniture placement." },
      { title: "Color-Rendered Furniture Plan", desc: "Presentation plan illustrating realistic textures, furniture arrangement, and spatial layout." },
      { title: "Standard 3D Daylight View", desc: "Photorealistic exterior 3D daytime render displaying facade finishes, rooflines, and materials." },
      { title: "Foundation, Column & Beam Sheets", desc: "Complete structural engineering sheets: foundation footings, columns, beam schedules, and slab reinforcement." },
      { title: "Conduit & Switchboard Layout", desc: "Detailed electrical routing, switchboard elevations, light points, and power distribution diagrams." },
      { title: "Supply & Drainage Routing", desc: "Water supply piping, drainage routes, soil waste lines, and external inspection chambers." },
    ],
    premium: [
      { title: "2D Master Blueprints & Sections", desc: "Complete set of detailed architectural blueprints, longitudinal/cross sections, and window/door schedules." },
      { title: "HD Presentation Layouts", desc: "High-definition rendered floor layouts with realistic textures, lighting details, and optimized spatial flow." },
      { title: "Premium 3D Elevation + 4K Walkthrough Video", desc: "Multi-angle photorealistic 4K exterior renderings plus 3D cinematic walkthrough video." },
      { title: "Seismic-Resistant RCC & BBS Schedules", desc: "Advanced structural design engineered for seismic resistance, complete Bar Bending Schedules (BBS), and reinforcement details." },
      { title: "FRLS Conduit Schematics & EV Provision", desc: "Flame-retardant conduit diagrams, balanced phase load calculation, and dedicated EV charging point provision." },
      { title: "Dual-Piping & Greywater Slopes", desc: "Dual-supply plumbing lines (drinking + utility), optimized drainage slopes, and greywater diversion schematics." },
    ],
    luxury: [
      { title: "Bespoke Courtyard & Spatial Geometry", desc: "Architecturally curated spatial planning, traditional/modern courtyard orientation, and custom volume studies." },
      { title: "Ultra-HD Photorealistic Finishes", desc: "Ultra-high-definition presentation floor plans with bespoke materiality, landscape integration, and daylight studies." },
      { title: "Premium 3D Elevation + Ultra-HD Elevation + Cinematic Walkthrough", desc: "4K/8K exterior perspective renderings, cinematic drone-style animation, and immersive walkthrough." },
      { title: "Heavy-Duty Seismic RCC & Foundation Vetting", desc: "Precision structural design for undulating or slope terrains, heavy-duty RCC frameworks, and certified peer review." },
      { title: "Smart Automation & Hybrid Solar Conduits", desc: "Integrated smart home automation raceways, solar hybrid inverter conduits, and surge protection distribution." },
      { title: "Pressure-Boosted Lines & Water Recycling", desc: "Hydro-pneumatic pressurized piping layout, solar water heating loops, and water recycling schematics." },
    ],
  };

  return (
    <section id="packages" className="py-24 md:py-32 bg-[#0e0f12] text-white border-t border-white/[0.08] relative">
      {/* Anchor for existing navbar links */}
      <span id="estimator" className="absolute -top-12 left-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#c4683a]" />
            <span className="text-[#c4683a] text-xs font-semibold tracking-[0.28em] uppercase">
              INVESTMENT
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            Transparent Packages for Every Vision
          </h2>

          <p className="text-sm sm:text-base text-[#9ca3af] mt-4 leading-relaxed">
            All packages include government approvals, project management, and handover documentation. Prices are indicative — every project is quoted individually after site assessment.
          </p>

          {/* Scope Discipline Selector */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-8 pt-2">
            <span className="text-xs uppercase font-bold tracking-[0.18em] text-[#a1a1aa] mr-1 hidden sm:inline-block">
              Discipline:
            </span>
            {[
              { id: "turnkey" as const, label: "Turnkey (Design + Build)" },
              { id: "construction" as const, label: "Civil Construction" },
              { id: "architecture" as const, label: "Architecture Only" },
            ].map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setScope(s.id)}
                className={`py-2 px-4 text-xs uppercase tracking-[0.16em] font-medium transition-all border ${
                  scope === s.id
                    ? "border-[#c4683a] bg-[#c4683a] text-white shadow-lg shadow-[#c4683a]/25"
                    : "border-white/[0.08] text-[#a1a1aa] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {packages.map((pkg) => {
            const isSelected = tier === pkg.id;
            const isFeatured = pkg.badge !== null;

            return (
              <div
                key={pkg.id}
                className={`group relative flex flex-col h-full bg-[#141518] rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 border ${
                  isSelected
                    ? "border-[#c4683a] shadow-2xl shadow-[#c4683a]/20 scale-[1.01]"
                    : isFeatured
                    ? "border-[#c4683a]/60 shadow-xl"
                    : "border-white/[0.08] hover:border-white/20 shadow-lg"
                }`}
              >
                {/* Ribbon Badge */}
                {pkg.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#c4683a] text-white px-4 py-1 rounded-b-md text-[10px] font-bold uppercase tracking-[0.2em] z-20 shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}

                {/* Top Package Label Header */}
                <div className="bg-[#101114] pt-7 pb-3 text-center px-4 border-b border-white/[0.05]">
                  <h3 className="font-display text-lg tracking-[0.16em] text-white/90 uppercase font-semibold">
                    {pkg.name}
                  </h3>
                </div>

                {/* Aspect Image with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141518] via-transparent to-transparent opacity-80" />
                </div>

                {/* Card Body */}
                <div className="flex-1 flex flex-col items-center px-6 sm:px-8 py-6 text-center">
                  <h4 className="font-display text-2xl text-[#c4683a] mb-2 font-medium tracking-tight">
                    {pkg.subtitle}
                  </h4>

                  {/* Rate Display */}
                  <div className="mb-4">
                    <span className="font-display text-3xl font-light text-white tracking-tight">
                      ₹{pkg.rate.toLocaleString()}
                    </span>
                    <span className="text-xs uppercase text-[#9ca3af] ml-1 font-medium">/sq.ft</span>

                    {pkg.includesDesign && (
                      <p className="text-[10px] font-semibold text-[#c4683a] uppercase tracking-[0.2em] mt-1">
                        {scope === "architecture" ? "Architectural Scope" : "Includes Design"}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-[#71717a] mb-6 leading-relaxed max-w-xs">
                    {pkg.description}
                  </p>

                  {/* Deliverables Checklist Box */}
                  <div className="w-full bg-white/[0.02] border border-white/[0.06] rounded-md p-5 mb-6 flex-1 text-left">
                    <ul className="space-y-3 text-xs text-[#a1a1aa]">
                      {(scope === "architecture" ? pkg.architectureHighlights : pkg.highlights).map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check size={14} className="text-[#c4683a] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug text-[#d4d4d8] font-medium">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions Row */}
                  <div className="w-full space-y-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setTier(pkg.id)}
                      className={`w-full py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-[#c4683a] text-white shadow-md shadow-[#c4683a]/30"
                          : "bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]"
                      }`}
                    >
                      <span>{isSelected ? "Selected Tier" : "Select Tier"}</span>
                      {isSelected ? <Check size={14} /> : <ArrowRight size={14} />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setSpecModalTier(pkg.id)}
                      className="w-full py-2 text-[11px] text-[#a1a1aa] hover:text-[#c4683a] uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>View Specifications</span>
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-time Project Valuation Calculator Panel */}
        <div className="bg-[#121316] border border-white/[0.08] p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Built-up Area Slider Control */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#a1a1aa] block mb-1">
                    Calculate Investment for Your Planned Space
                  </span>
                  <span className="text-xs text-[#71717a]">
                    Active Tier: <strong className="text-white capitalize">{tier}</strong> ({scope === "turnkey" ? "Turnkey" : scope === "construction" ? "Civil Construction" : "Architecture"})
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-display text-3xl font-semibold text-[#c4683a]">
                    {area.toLocaleString()}
                  </span>
                  <span className="text-xs text-white/70 font-normal ml-1">sq.ft</span>
                </div>
              </div>

              {/* Slider Input starting from 100 sq.ft */}
              <div>
                <input
                  type="range"
                  min="100"
                  max="8000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#2a2c32] rounded-lg appearance-none cursor-pointer accent-[#c4683a]"
                  aria-label="Planned Built-up Area in square feet"
                />
                <div className="flex justify-between text-[11px] text-[#71717a] mt-2">
                  <span>100 sq.ft (Compact Space)</span>
                  <span>4,000 sq.ft (Villa)</span>
                  <span>8,000 sq.ft (Estate / Commercial)</span>
                </div>
              </div>

              {/* Quick Area Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] text-[#71717a] uppercase tracking-wider mr-2">
                  Quick Select:
                </span>
                {[
                  { label: "100 sq.ft", val: 100 },
                  { label: "1,200 sq.ft", val: 1200 },
                  { label: "2,500 sq.ft", val: 2500 },
                  { label: "4,000 sq.ft", val: 4000 },
                ].map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    onClick={() => setArea(p.val)}
                    className={`px-3 py-1 text-[11px] rounded transition-colors ${
                      area === p.val
                        ? "bg-[#c4683a]/20 border border-[#c4683a] text-white"
                        : "bg-white/[0.04] hover:bg-white/[0.08] text-[#a1a1aa]"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Valuation Banner */}
            <div className="lg:col-span-5 bg-[#c4683a] text-[#111111] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#111111]/80 block mb-2">
                  Estimated Project Valuation
                </span>

                <div className="my-2 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-light tracking-tight text-[#111111]">
                    ₹{formattedCost}
                  </span>
                  <span className="text-base font-bold ml-2 text-[#111111]/80 uppercase">
                    {isLakhs ? "Lakhs*" : "*"}
                  </span>
                </div>

                <p className="text-xs text-[#111111]/80 font-medium">
                  Approx. ₹{selectedRate.toLocaleString()} per sq.ft for {area.toLocaleString()} sq.ft built area.
                </p>

                <div className="mt-6 pt-4 border-t border-[#111111]/20 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#111111]/80">Estimated Timeline:</span>
                    <span className="font-bold text-[#111111]">{getTimeline()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#111111]/80">Project Discipline:</span>
                    <span className="font-bold text-[#111111] uppercase">
                      {scope === "turnkey" ? "Turnkey (Design + Build)" : scope === "construction" ? "Civil Construction" : "Architecture"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[#111111]/80">Location Benchmark:</span>
                    <span className="font-bold text-[#111111]">Sagar & Malnad Region</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="w-full py-3.5 bg-[#111111] hover:bg-black text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <span>Discuss This Estimate</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Custom Quote CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto space-y-6">
          <p className="text-xs text-[#71717a] italic leading-relaxed">
            *Prices vary based on location, topography, soil conditions, and custom architectural specifications. Contact us for a customized project estimate.
          </p>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#c4683a] hover:bg-[#b55b2f] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Full Technical Specifications Modal */}
      {activeModalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-[#141518] border border-white/[0.1] rounded-lg shadow-2xl p-6 md:p-8 my-8 text-white">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/[0.08] pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#c4683a] text-[10px] font-bold tracking-[0.2em] uppercase">
                    {scope === "architecture" ? "Architectural Deliverables" : "Technical Specifications"}
                  </span>
                  {activeModalData.badge && (
                    <span className="bg-[#c4683a] text-black text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      {activeModalData.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-normal text-white">
                  {activeModalData.subtitle} ({activeModalData.name})
                </h3>
                <p className="text-xs text-[#c4683a] font-semibold mt-0.5">
                  Starting at ₹{activeModalData.rate.toLocaleString()} per sq.ft
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSpecModalTier(null)}
                className="p-2 text-[#71717a] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Specifications Details Grid */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 text-xs text-[#a1a1aa] leading-relaxed">
              {scope === "architecture" ? (
                architectureModalSpecs[activeModalData.id].map((spec, idx) => (
                  <div key={idx} className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      {spec.title}
                    </span>
                    <p>{spec.desc}</p>
                  </div>
                ))
              ) : (
                <>
                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      1. Structural Engineering & Civil Core
                    </span>
                    <p>{activeModalData.specifications.structure}</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      2. Flooring & Surface Finishes
                    </span>
                    <p>{activeModalData.specifications.flooring}</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      3. Kitchen & Utility
                    </span>
                    <p>{activeModalData.specifications.kitchen}</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      4. Bathrooms & Sanitary Plumbing
                    </span>
                    <p>{activeModalData.specifications.bathrooms}</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      5. Doors & Windows Joinery
                    </span>
                    <p>{activeModalData.specifications.doorsWindows}</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      6. Electricals & Automation Readiness
                    </span>
                    <p>{activeModalData.specifications.electricals}</p>
                  </div>

                  <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded">
                    <span className="font-bold text-white block uppercase tracking-wider mb-1">
                      7. Painting & Climate Weather-Sealing
                    </span>
                    <p>{activeModalData.specifications.painting}</p>
                  </div>

                  <div className="p-4 bg-[#c4683a]/10 border border-[#c4683a]/30 rounded flex items-start gap-3">
                    <Shield size={20} className="text-[#c4683a] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block uppercase tracking-wider mb-1">
                        Warranty & Compliance
                      </span>
                      <p className="text-white/80">{activeModalData.specifications.warranty}</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-[#71717a]">
                Customized BOQs prepared after topographical survey.
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setTier(activeModalData.id);
                    setSpecModalTier(null);
                  }}
                  className="px-4 py-2.5 bg-[#c4683a] hover:bg-[#b55b2f] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Apply To Calculator
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}