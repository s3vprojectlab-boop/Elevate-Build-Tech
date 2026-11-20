import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StudioSection from "@/components/StudioSection";
import AimsGoalsSection from "@/components/AimsGoalsSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ProjectsSection from "@/components/ProjectsSection";
import YourProjectSection from "@/components/YourProjectSection";
import ProcessSection from "@/components/ProcessSection";
import ProfileBanner from "@/components/ProfileBanner";
import CostEstimator from "@/components/CostEstimator";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WorkModalController from "@/components/WorkModalController";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0f12] text-foreground flex flex-col selection:bg-[#C2703D] selection:text-white relative">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 01 / THE STUDIO */}
      <StudioSection />

      {/* Aims & Strategic Goals */}
      <AimsGoalsSection />

      {/* 02 / WHAT WE DO */}
      <WhatWeDoSection />

      {/* Inline Standard Projects Portfolio */}
      <ProjectsSection />

      {/* 03 / YOUR PROJECT */}
      <YourProjectSection />

      {/* 04 / HOW WE WORK */}
      <ProcessSection />

      {/* Brand Profile Banner (1584x396 Architectural Statement) */}
      <ProfileBanner />

      {/* Interactive Project Cost & Valuation Estimator */}
      <CostEstimator />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* 05 / START A PROJECT */}
      <ContactSection />

      {/* Site Footer */}
      <Footer />

      {/* Lazy Loaded Portfolio Details Modal Controller */}
      <WorkModalController />

      {/* Floating Back To Top */}
      <BackToTop />

      {/* Floating WhatsApp Quick Connect */}
      <FloatingWhatsApp />
    </main>
  );
}
