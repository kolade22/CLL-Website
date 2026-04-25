/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f0e6",
          100: "#c0d9c0",
          200: "#97bf97",
          300: "#6da56d",
          400: "#4d914d",
          500: "#2d7d2d", // green
          600: "#1b6b1b",
          700: "#165716",
          800: "#104510",
          900: "#0a330a",
        },
        accent: {
          DEFAULT: "#0D47A1", // deep blue
          light: "#1565C0",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
