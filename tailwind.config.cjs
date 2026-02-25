/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070B",
        card: "#0D1220",
        panel: "#111829",
        line: "#24314A",
        ink: "#E7EDF9",
        mute: "#97A4BA",
        accent: "#D8A93A",
        accent2: "#F4C84A",
      },
      boxShadow: {
        glow: "0 0 0 1px #24314a, 0 14px 36px -20px rgba(244,200,74,.35)",
      },
      borderRadius: {
        "2xl": "20px",
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        heading: ["Michroma", "Roboto", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
