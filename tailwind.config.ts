import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      colors: { gold: "#f5c76b" },
      boxShadow: {
        glow: "0 24px 90px rgba(45, 65, 95, 0.16)",
        neon: "0 0 36px rgba(217, 70, 239, 0.42), 0 0 70px rgba(34, 211, 238, 0.18)",
        card: "0 24px 90px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
