"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ViewWorkModal = dynamic(() => import("./ViewWorkModal"), {
  ssr: false,
});

export default function WorkModalController() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-work-modal", handleOpen);
    return () => window.removeEventListener("open-work-modal", handleOpen);
  }, []);

  if (!isOpen) return null;
  return <ViewWorkModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

export function triggerWorkModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-work-modal"));
  }
}
