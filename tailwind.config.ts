import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // We will attach these in layout.tsx next
        sans: ["var(--font-inter)"],
        serif: ["var(--font-merriweather)"],
      },
      colors: {
        // The Palette
        "tengri-blue": "#2C5EA8", // A deep, rich authoritative blue
        "sky-light": "#8CB6E1", // The lighter horizon
        paper: "#F9F7F1", // Off-white for the content cards
        ink: "#1a1a1a", // Soft black for text (not harsh #000)
      },
      backgroundImage: {
        // This creates the "Great Sky" effect
        "eternal-sky": "linear-gradient(to bottom, #2C5EA8, #8CB6E1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Ensure this is here for the blog posts
  ],
};
export default config;
