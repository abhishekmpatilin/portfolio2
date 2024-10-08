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
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "slide-in": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(3)", opacity: "0" },
        },
      },
      animation: {
        "zap-line": "zap-line 0.6s forwards",
        "slide-up": "slide-up 0.4s ease forwards",
        "slide-in": "slide-in 0.4s ease forwards",
        ripple: "ripple 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
