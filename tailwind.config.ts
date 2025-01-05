import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        primaryFG: "#FFFFFF",
        secondaryFG: "rgba(255, 255, 255, 0.8)",
        tertiaryFG: "rgba(255, 255, 255, 0.48)",
        stroke: "rgba(255, 255, 255, 0.16)",
        primaryBG: "#080808",
        secondaryBG: "#161616",
        tertiaryBG: "#242424",
        icon: "#484848",
        pink: "#EE00FF",
        green: "#43E660",
        blue: "#00BBFF",
        negativeRed: "#E64346",
        cellLow: "rgba(255, 255, 255, 0.08)",
        cellMiddleLow: "rgba(67, 230, 96, 0.16)",
        cellMiddle: "rgba(67, 230, 96, 0.32)",
        cellMiddleHigh: "rgba(67, 230, 96, 0.64)",
        cellHigh: "#43E660",
        positiveGreenBG: "rgba(67, 230, 96, 0.32)",
        negativeRedBG: "rgba(230, 67, 70, 0.32)",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
} satisfies Config;

export default config;
