/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B1224",
        card: "#111A2D",
        panel: "#162037",
        line: "#1F3046",
        ink: "#E7EEF8",
        mute: "#9AA6BF",
        accent: "#1EE9A6",
        accent2: "#FFCC55",
      },
      boxShadow: {
        glow: "0 0 0 1px #263850, 0 0 32px 3px rgba(30,233,166,.12)",
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
