import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <a
      href="/"
      className={`inline-flex items-center group select-none transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Elevate Build Tech Home"
    >
      <Image
        src="/ebt-horizontal-ivory-copper.png"
        alt="Elevate Build Tech"
        width={3272}
        height={672}
        className="h-8 md:h-9 xl:h-10 w-auto object-contain"
      />
    </a>
  );
}
