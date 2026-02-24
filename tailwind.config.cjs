/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#040816",
        card: "#0A132B",
        panel: "#101C3A",
        line: "#24345C",
        ink: "#F2F5FF",
        mute: "#97A7CC",
        accent: "#E9C25B",
        accent2: "#FFD84F",
      },
      boxShadow: {
        glow: "0 0 0 1px #24345c, 0 0 38px 4px rgba(255,216,79,.18)",
      },
      borderRadius: {
        "2xl": "20px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
