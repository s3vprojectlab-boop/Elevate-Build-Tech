"use client";

import React, { useState } from "react";
import { MapPin, CheckCircle2, Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    about: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#f4f0e8] text-[#1a1a1a] border-t border-[#ded7c8] bg-cream-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-start">
          {/* Left Column: Contact Philosophy & Studio Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#c4683a] text-xs font-semibold tracking-[0.24em] uppercase">
                  05 / Start a Project
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#1a1a1a] tracking-tight leading-[1.15] mb-6">
                Let’s build
                <span className="block font-normal">something that rises.</span>
              </h2>

              {/* Subtitle */}
              <div className="space-y-1 text-base text-[#4a4642] mb-12">
                <p>Tell us what you have in mind.</p>
                <p>A new beginning starts with a conversation.</p>
              </div>
            </div>

            {/* Direct Studio Coordinates */}
            <div className="space-y-8 pt-4">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c] mb-2">
                  Call The Studio
                </span>
                <a
                  href="tel:+919019708760"
                  className="font-display text-2xl sm:text-3xl font-semibold text-[#1a1a1a] hover:text-[#c4683a] transition-colors inline-block"
                >
                  +91 90197 08760
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c] mb-2">
                  Email The Studio
                </span>
                <a
                  href="mailto:elevatebuildtech02@gmail.com"
                  className="text-base sm:text-lg font-medium text-[#1a1a1a] hover:text-[#c4683a] transition-colors flex items-center gap-2"
                >
                  <Mail size={18} className="text-[#c4683a] flex-shrink-0" />
                  <span>elevatebuildtech02@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c] mb-2">
                  Visit Us
                </span>
                <p className="text-base text-[#292524] font-medium flex items-center gap-2">
                  <MapPin size={16} className="text-[#c4683a] flex-shrink-0" />
                  <span>Sagar, Karnataka – 577401</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Inquiry Form */}
          <div className="lg:col-span-7 bg-[#fbf9f5] p-8 md:p-12 border border-[#ded7c8] shadow-sm">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#c4683a]/15 text-[#c4683a] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#1a1a1a]">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#57534e] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || "friend"}. Our architectural and project team
                  in Sagar will review your details and connect with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      about: "",
                    });
                  }}
                  className="mt-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#c4683a] hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Your Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-[#cfc8b8] focus:border-[#c4683a] py-3 text-sm text-[#1a1a1a] placeholder:text-[#a8a29e] outline-none transition-colors"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91"
                      className="w-full bg-transparent border-b border-[#cfc8b8] focus:border-[#c4683a] py-3 text-sm text-[#1a1a1a] placeholder:text-[#a8a29e] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full bg-transparent border-b border-[#cfc8b8] focus:border-[#c4683a] py-3 text-sm text-[#1a1a1a] placeholder:text-[#a8a29e] outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* I'm Interested In */}
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]"
                  >
                    I'm Interested In
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#cfc8b8] focus:border-[#c4683a] py-3 text-sm text-[#1a1a1a] outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-[#a8a29e]">
                        Select a service
                      </option>
                      <option value="Architecture & Planning">
                        Architecture & Concept Planning
                      </option>
                      <option value="Civil Construction">
                        Civil Construction & Execution
                      </option>
                      <option value="Project Management (PMC)">
                        Project Management Consultancy (PMC)
                      </option>
                      <option value="Turnkey Design & Build">
                        Turnkey Design, Build & Delivery
                      </option>
                      <option value="Interior & Renovation">
                        Interior Architecture & Renovation
                      </option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#78716c]">
                      ▾
                    </div>
                  </div>
                </div>

                {/* About Your Project */}
                <div className="space-y-2">
                  <label
                    htmlFor="about"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]"
                  >
                    About Your Project
                  </label>
                  <textarea
                    id="about"
                    rows={3}
                    required
                    value={formData.about}
                    onChange={(e) =>
                      setFormData({ ...formData, about: e.target.value })
                    }
                    placeholder="Location, ideas and a little about your plans"
                    className="w-full bg-transparent border-b border-[#cfc8b8] focus:border-[#c4683a] py-3 text-sm text-[#1a1a1a] placeholder:text-[#a8a29e] outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#c4683a] hover:bg-[#b55b2f] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 active:scale-[0.99]"
                  >
                    <span>{loading ? "Sending..." : "Send Enquiry"}</span>
                    <span className="text-sm">↗</span>
                  </button>
                  <p className="text-[11px] text-[#78716c] text-center mt-3 tracking-wide">
                    Direct reply from the team within one business day or you can call during working hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
