/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#0E4D43", deep: "#0B2B26", night: "#0A1F1B", 600: "#12594D" },
        sage: { DEFAULT: "#8FAE8B", ink: "#2F4F2C" },
        gold: { DEFAULT: "#D4B581", ink: "#6E5418", soft: "#F6EEDD" },
        coral: { DEFAULT: "#F97B68", ink: "#9A2F1F", soft: "#FDEAE6" },
        sky: { DEFAULT: "#7CB3E6", ink: "#1F4F7A", soft: "#E7F0FA" },
        beige: "#F7F2E8",
        mint: "#E8F1E9",
        paper: "#FAF9F6",
        ink: { DEFAULT: "#15302B", muted: "#526460" },
        line: "#E3DED3",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      maxWidth: { page: "1200px" },
      keyframes: {
        // Transform only: fading the hero from opacity 0 would delay Largest Contentful Paint.
        rise: { from: { transform: "translateY(12px)" }, to: { transform: "none" } },
      },
      animation: { rise: "rise 600ms cubic-bezier(.2,.7,.2,1) both" },
    },
  },
  plugins: [],
};
