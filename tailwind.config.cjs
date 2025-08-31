/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html","./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", md: "2.5rem" }, screens: { xl: "1200px" } },
    extend: {
      colors: {
        bg: "#0B1224",
        card: "#111A2D",
        panel: "#162037",
        line: "#1F3046",
        ink: "#E7EEF8",
        mute: "#9AA6BF",
        accent: "#1EE9A6",
        accent2: "#FFCC55"
      },
      borderRadius: {
        "2xl": "20px"
      },
      boxShadow: {
        glow: "0 0 0 1px #263850, 0 0 32px 3px rgba(30,233,166,.12)",
        "glow-strong": "0 0 0 1px #385070, 0 0 48px 6px rgba(255,204,85,.28)"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      fontFamily: {
        inter: ["Inter","ui-sans-serif","system-ui","sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
