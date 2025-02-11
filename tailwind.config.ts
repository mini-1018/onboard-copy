import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#003559",
        white: "#ffffff",
        gray: "#f5f5f5",
        "gray-100": "#EDEEF1",
        "gray-200": "#D9D9D9",
        "gray-300": "#C4C4C4",
        "gray-400": "#AFAFAF",
        "gray-500": "#5D5D5D",
        "gray-600": "#333333",
        "gray-700": "#222222",
        "gray-800": "#111111",
        "gray-900": "#000000",
        red: "#ff0000",
        "red-500": "#C90000",
        pink: "#DA5380",
        yellow: "#FFCB00",
        "yellow-hover": "#FFFF8F",

        "primary-hover": "#007CCE",

        "red-hover": "#FF0000",
        secondary: "#000000",
        accent: "#000000",
      },
      fontFamily: {
        noto: ["Noto Sans KR", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
        spin: "spin 3s linear infinite",
        slideUpAndFade: "slideUpAndFade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        slideDownAndFade: "slideDownAndFade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200%" },
          "100%": { backgroundPosition: "-200%" },
        },
        slideUpAndFade: {
          "0%": { opacity: "0", transform: "translateY(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        slideDownAndFade: {
          "0%": { opacity: "0", transform: "translateY(-2px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "custom-right-bottom": "0px 5px 0px 0px rgba(0, 0, 0, 0.25)",
      },

      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, #D9D9D9 0%, #EDEEF1 50%, #D9D9D9 100%)",
      },

      backgroundSize: {
        custom: "300% 100%",
      },
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;
