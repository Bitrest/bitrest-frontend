import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradients: {
        // You can name your gradient anything you want
        "custom-gray": {
          colors: ["#BFB9B9", "#A3A6A6"],
        },
      },

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
        aeonik: ["var(--font-aeonik)"],
        bricolage: ["var(--font-bricolage)"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(183.2deg, #063D37 -151.72%, #063D37 -31.98%, #082C1F 35.28%, #032723 84.69%)",
        "custom-gray-gradient": "linear-gradient(to right, #BFB9B9, #A3A6A6)",
      },
      borderColor: {
        "custom-yellow-gradient": "linear-gradient(to right, #FF9E81, #C3F9FF)",
      },
    },
  },
  plugins: [],
} satisfies Config;
