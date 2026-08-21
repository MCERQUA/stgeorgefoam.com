import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: "#FAF6EF",
        ink: "#2A211B",
        slatey: "#5C5147",
        copper: {
          DEFAULT: "#B5502E",
          600: "#C1633F",
          700: "#8C3D22",
          900: "#5E2814",
        },
        sage: {
          DEFAULT: "#7A8B6F",
          600: "#8FA083",
          700: "#5F6E55",
        },
        stone: {
          100: "#F3EEE3",
          200: "#EFE6D8",
        },
        charcoal: {
          DEFAULT: "#2A211B",
          800: "#332A22",
          700: "#3E332A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Work Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(42, 33, 27, 0.22)",
        card: "0 4px 20px -8px rgba(42, 33, 27, 0.16)",
        lift: "0 20px 45px -18px rgba(42, 33, 27, 0.32)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
