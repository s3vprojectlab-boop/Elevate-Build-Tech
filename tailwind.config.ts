import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        elevate: {
          obsidian: "#111214",
          ivory: "#F2EDE4",
          copper: {
            DEFAULT: "#C2703D",
            light: "#d5794b",
            dark: "#a9542a",
          },
          gold: "#C9A96E",
          graphite: "#2A2B2E",
          bronze: "#8B5A36",
          concrete: "#8E8A83",
          black: "#111214",
          terracotta: {
            DEFAULT: "#C2703D",
            light: "#d5794b",
            dark: "#a9542a",
          },
          cream: {
            DEFAULT: "#F2EDE4",
            pure: "#fbf9f5",
            dark: "#ede8dd",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "-apple-system", "sans-serif"],
        display: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'architectural': '0.15em',
      }
    },
  },
  plugins: [],
};
export default config;
