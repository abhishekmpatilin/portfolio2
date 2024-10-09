/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      },
      animation: {
        "zap-line": "zap-line 0.6s forwards",
        ripple: "ripple 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
