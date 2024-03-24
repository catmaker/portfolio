import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "custom-orange": "#FC836C",
        "custom-gray": "#979797",
      },
      width: {
        "90": "90%",
        "80px": "80px",
        "120px": "120px",
      },
      borderColor: {
        "custom-gray": "#979797",
      },
      borderWidth: {
        "0.5": "0.5px",
        "1": "1px",
        "2": "2px",
      },
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
  variants: {
    extends: {},
  },
  plugins: [],
};
export default config;
