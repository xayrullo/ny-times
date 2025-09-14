import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nyt: [
          "nyt-cheltenham",
          "cheltenham-fallback-georgia",
          "cheltenham-fallback-noto",
          "georgia",
          "'Times New Roman'",
          "times",
          "serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
