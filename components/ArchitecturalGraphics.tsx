import React from "react";

export function HeroPortalGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        width="600"
        height="520"
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
        aria-hidden="true"
      >
        {/* Curving bottom horizon / ground line */}
        <path
          d="M20 480 Q 300 450 590 475"
          stroke="rgba(255, 255, 255, 0.25)"
          strokeWidth="1.5"
        />

        {/* Inner / Lowest Frame */}
        <g stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1.5" fill="none">
          <path d="M50 470 V 220 H 260 V 465" />
          <path d="M70 470 V 240 H 240 V 465" strokeOpacity="0.5" />
        </g>

        {/* Middle Rising Frame */}
        <g stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.5" fill="none">
          <path d="M120 465 V 140 H 380 V 460" />
          <path d="M140 465 V 160 H 360 V 460" strokeOpacity="0.5" />
        </g>

        {/* Highest / Outer Frame with Copper Terracotta Highlight */}
        <g fill="none">
          {/* Left and top wireframe strokes */}
          <path
            d="M200 460 V 60 H 510"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="2"
          />
          {/* Inner offset wireframe */}
          <path
            d="M220 460 V 80 H 480"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1.5"
          />

          {/* Right vertical jamb with signature terracotta accent stroke */}
          <path
            d="M510 60 V 380"
            stroke="#C2703D"
            strokeWidth="4"
            strokeLinecap="square"
          />
          <path
            d="M480 80 V 360"
            stroke="#C2703D"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Connecting perspective depth lines */}
          <line
            x1="50"
            y1="220"
            x2="120"
            y2="140"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="120"
            y1="140"
            x2="200"
            y2="60"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="260"
            y1="220"
            x2="380"
            y2="140"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="380"
            y1="140"
            x2="510"
            y2="60"
            stroke="rgba(194, 112, 61, 0.35)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </g>
      </svg>
    </div>
  );
}

export function TerracottaElevationGraphic({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Curving ground foundation arch */}
        <path
          d="M16 215 Q 160 205 304 215"
          stroke="#111111"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Left stepped volume (lowest) */}
        <rect
          x="36"
          y="135"
          width="75"
          height="76"
          stroke="#111111"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Middle stepped volume */}
        <rect
          x="95"
          y="85"
          width="95"
          height="126"
          stroke="#111111"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Right stepped volume (tallest) */}
        <rect
          x="170"
          y="35"
          width="110"
          height="176"
          stroke="#111111"
          strokeWidth="4"
          fill="none"
        />

        {/* Inner architectural corner bracket inside tallest volume */}
        <path
          d="M205 210 V 60 H 260"
          stroke="#111111"
          strokeWidth="2.5"
          fill="none"
        />
        <line
          x1="260"
          y1="60"
          x2="260"
          y2="210"
          stroke="#111111"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
