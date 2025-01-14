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
        'sm': '360px',
        'md': '768px',
        'lg': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        backgroundGradient: 'var(--Background-Gradient, linear-gradient(180deg, #080808 0%, #161616 24%, #080808 100%))',
        phoneGraphicGradient: 'linear-gradient(transparent 64%, #080808 100%)',
      },
      colors: {
        primaryFG: "#FFFFFF",
        primaryFGInverted: "#000000",
        secondaryFG: "rgba(255, 255, 255, 0.8)",
        tertiaryFG: "rgba(255, 255, 255, 0.48)",
        stroke: "rgba(255, 255, 255, 0.16)",
        primaryBG: "#080808",
        secondaryBG: "#161616",
        tertiaryBG: "#242424",
        buttonBG: "#DDDDDD",
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
        greenBG: "rgba(67, 230, 96, 0.32)",
        redBG: "rgba(230, 67, 70, 0.32)",
        glassCardBG: "rgba(248, 248, 248, 0.08)",
        glass: "rgba(248, 248, 248, 0.8",
      },
      boxShadow: {
        glassCardShadow: "0px 2px 4px 0px rgba(255, 255, 255, 0.16) inset, 0px 8px 8px 0px rgba(0, 0, 0, 0.32)",
        navBarShadow: "0px 2px 4px 0px rgba(255, 255, 255, 0.16)",
        phoneGraphicShadow: "0px 0px 104px 0px rgba(0, 0, 0, 0.80)",
        
      },
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
