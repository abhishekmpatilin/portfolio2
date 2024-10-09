/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollBehavior: {
        smooth: "smooth",
      },
      keyframes: {
        "zap-line": {
          "0%": { width: "0", left: "0" },
          "50%": { width: "100%", left: "0" },
          "100%": { width: "0", left: "100%" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        moveUp: {
          "0%": { transform: "translateY(32px)", opacity: 1 },
          "50%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-64px)", opacity: 1 },
        },
        moveToZero: {
          "0%": { transform: "translateY(32px)", opacity: 1 },
          "100%": { transform: "translateY(-32px)", opacity: 1 },
        },
        moveUpNegative: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-64px)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "zap-line": "zap-line 0.6s forwards",
        ripple: "ripple 0.6s ease-out",
        moveUp: "moveUp 3s ease-in-out forwards",
        moveToZero: "moveToZero 1s ease-in-out forwards",
        moveUpNegative: "moveUpNegative 1s ease-in-out forwards",
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
