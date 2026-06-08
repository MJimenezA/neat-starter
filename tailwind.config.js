module.exports = {
  content: ["./src/**/*.{html,njk,md,js}", "./.eleventy.js"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ivory: "#F5F0E8",
        cream: "#F2EDE6",
        tangerine: "#F5903A",
        blush: "#EEC9C2",
        sage: "#B8CDB8",
        forest: "#2C3B1A",
        ink: "#3B392F",
        terracotta: "#C56A3D",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 40px -20px rgba(59, 57, 47, 0.35)",
        card: "0 24px 60px -28px rgba(44, 59, 26, 0.30)",
      },
      borderRadius: {
        "4xl": "2.25rem",
      },
      letterSpacing: {
        widest2: "0.32em",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
