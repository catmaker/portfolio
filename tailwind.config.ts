import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate3d(-1px, 0, 0)" },
          "50%": { transform: "translate3d(2px, 0, 0)" },
          "100%": { transform: "translate3d(-1px, 0, 0)" },
        },
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      transitionProperty: {
        size: "font-size",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
