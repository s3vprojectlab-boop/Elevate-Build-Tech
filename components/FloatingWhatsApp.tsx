"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling a bit or after 1.5 seconds
    const timer = setTimeout(() => {
      setVisible(true);
      setShowTooltip(true);
    }, 1500);

    // Hide tooltip after 6 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 7500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const phoneNumber = "919019708760";
  const defaultMessage = encodeURIComponent(
    "Hello Elevate Build Tech, I would like to make an enquiry regarding an Architecture / Construction / PMC project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="relative bg-[#141518] text-white border border-[#c4683a]/60 shadow-2xl p-4 max-w-xs mb-1 animate-in zoom-in-95 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-white/50 hover:text-white p-1"
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#c4683a] inline-block animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c4683a]">
              Direct Studio Desk
            </span>
          </div>
          <p className="text-xs text-[#d4d4d8] leading-relaxed mb-3">
            Have a project in mind? Chat directly with our architects & engineers on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-[#c4683a] hover:text-white transition-colors"
          >
            <span>Start WhatsApp Chat</span>
            <span>→</span>
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Enquiry with Elevate Build Tech"
        className="group relative flex items-center gap-3 bg-[#141518] hover:bg-[#1c1e24] border border-[#c4683a] text-white px-4 py-3 shadow-2xl shadow-black/70 hover:shadow-[#c4683a]/25 transition-all duration-300 active:scale-95"
      >
        {/* Subtle copper ambient glow on hover */}
        <span className="absolute -inset-0.5 bg-[#c4683a] opacity-0 group-hover:opacity-20 blur-sm transition-opacity pointer-events-none" />

        <div className="relative flex items-center justify-center w-8 h-8 bg-[#c4683a]/15 text-[#c4683a] group-hover:bg-[#c4683a] group-hover:text-white transition-colors">
          <MessageCircle size={17} />
        </div>

        <div className="relative flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c4683a] leading-tight">
            Direct Enquiry
          </span>
          <span className="text-xs font-semibold text-white tracking-wide mt-0.5">
            WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
