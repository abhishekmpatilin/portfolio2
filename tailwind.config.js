/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "zap-line": {
          "0%": { width: "0", left: "0" },
          "40%": { width: "100%", left: "0" },
          "100%": { width: "0", left: "100%" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-10ch)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeOut: {
          "0%": { height: "100%" },
          "100%": { height: "0%" },
        },
      },
      animation: {
        "zap-line": "zap-line 0.6s forwards",
        ripple: "ripple 0.6s ease-out",
        "slide-up": "slide-up 2s ease-in-out forwards",
        slideDown: "slideDown 1s forwards",
        fadeOut: "fadeOut 1s forwards",
      },
    },
  },
  plugins: [],
};
