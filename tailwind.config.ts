import type { Config } from "tailwindcss";

export default {
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
        baseGreen: {
          one: "#5BC6A3",
        },
      },
      fontFamily: {
        carbonic: ["var(--font-carbonic)"],
        outfit: ["var(--font-outfit)"],
        roboto: ["var(--font-roboto)"],
        manrope: ["var(--font-manrope)"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(183.2deg, #063D37 -151.72%, #063D37 -31.98%, #082C1F 35.28%, #032723 84.69%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
