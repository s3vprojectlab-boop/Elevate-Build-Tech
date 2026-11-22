"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, CheckCircle2, Mail, AlertCircle, ChevronDown, Check } from "lucide-react";

const FORMBOLD_ENDPOINT = "https://formbold.com/s/oYpEv";
const FORMBOLD_API_KEY = "$2a$10$rE/U.gToquZ6qxMq/YJt..dE3a6oqOMC.33GsrzJ52fnQ5KK8l9bS";

const SERVICE_OPTIONS = [
  { value: "Architecture & Planning", label: "Architecture & Concept Planning" },
  { value: "Civil Construction", label: "Civil Construction & Execution" },
  { value: "Project Management (PMC)", label: "Project Management Consultancy (PMC)" },
  { value: "Turnkey Design & Build", label: "Turnkey Design, Build & Delivery" },
  { value: "Interior & Renovation", label: "Interior Architecture & Renovation" },
];

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedService = SERVICE_OPTIONS.find((s) => s.value === formData.service);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.service) {
      setErrorMessage("Please select a service you are interested in.");
      return;
    }

    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Formbold API key / secret attached directly to submission payload
    data.set("apikey", FORMBOLD_API_KEY);
    data.set("api_key", FORMBOLD_API_KEY);
    data.set("secret", FORMBOLD_API_KEY);
    data.set("service", formData.service);

    // Ensure both "about" and "message" are available for Formbold notification and webhooks
    if (!data.has("about") && formData.about) {
      data.append("about", formData.about);
    }
    if (!data.has("message") && formData.about) {
      data.append("message", formData.about);
    }

    try {
      const response = await fetch(FORMBOLD_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const result = await response.json().catch(() => null);
        setErrorMessage(
          result?.message ||
            "Unable to submit enquiry right now. Please try again or reach out to us directly."
        );
      }
    } catch (err) {
      setErrorMessage(
        "A network error occurred. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{ colorScheme: "light" }}
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
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage(null);
                    setIsDropdownOpen(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: "",
                      about: "",
                    });
                  }}
                  className="mt-4 text-xs uppercase tracking-[0.2em] font-semibold text-[#c4683a] hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                action={FORMBOLD_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Formbold API Key / Secret */}
                <input type="hidden" name="apikey" value={FORMBOLD_API_KEY} />
                <input type="hidden" name="api_key" value={FORMBOLD_API_KEY} />
                <input type="hidden" name="secret" value={FORMBOLD_API_KEY} />

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 bg-[#fcedea] border border-[#e8a598] text-[#9b2c1b] text-xs font-medium tracking-wide flex items-start gap-2.5">
                    <AlertCircle size={16} className="text-[#c4683a] flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

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
                    name="name"
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
                      name="phone"
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
                      name="email"
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

                {/* I'm Interested In (Custom Architectural Dropdown) */}
                <div className="space-y-2">
                  <label
                    htmlFor="service-button"
                    className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]"
                  >
                    I'm Interested In
                  </label>
                  <div ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      id="service-button"
                      aria-haspopup="listbox"
                      aria-expanded={isDropdownOpen}
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className="w-full bg-transparent border-b border-[#cfc8b8] focus:border-[#c4683a] py-3 text-sm text-left flex items-center justify-between outline-none transition-colors cursor-pointer"
                    >
                      <span className={formData.service ? "text-[#1a1a1a]" : "text-[#a8a29e]"}>
                        {selectedService ? selectedService.label : "Select a service"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-[#78716c] transition-transform duration-200 flex-shrink-0 ml-2 ${
                          isDropdownOpen ? "rotate-180 text-[#c4683a]" : ""
                        }`}
                      />
                    </button>

                    {/* Hidden input for Formbold form serialization */}
                    <input
                      type="hidden"
                      name="service"
                      value={formData.service}
                    />

                    {/* Custom Dropdown Menu */}
                    {isDropdownOpen && (
                      <ul
                        role="listbox"
                        aria-labelledby="service-button"
                        className="absolute z-30 left-0 right-0 mt-1 bg-[#fbf9f5] border border-[#ded7c8] shadow-xl py-1 max-h-64 overflow-y-auto outline-none animate-in fade-in-50 duration-150"
                      >
                        {SERVICE_OPTIONS.map((opt) => {
                          const isSelected = formData.service === opt.value;
                          return (
                            <li
                              key={opt.value}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData({ ...formData, service: opt.value });
                                setIsDropdownOpen(false);
                                setErrorMessage(null);
                              }}
                              className={`px-4 py-3 text-sm flex items-center justify-between cursor-pointer transition-colors duration-150 ${
                                isSelected
                                  ? "bg-[#f4efe4] text-[#c4683a] font-medium"
                                  : "text-[#1a1a1a] hover:bg-[#f4efe4] hover:text-[#c4683a]"
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && (
                                <Check size={14} className="text-[#c4683a] flex-shrink-0 ml-2" />
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
                    name="message"
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
                    className="w-full py-4 bg-[#c4683a] hover:bg-[#b55b2f] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99] cursor-pointer"
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
