/** @type {import('tailwindcss').Config} */

// Palette derived from the Crest Latitude logo:
// azure #0193DC (primary), royal indigo #3D3D92 (dark sections), red #D9281F (accent)
const crest = {
  50: "#EEF6FC",
  100: "#D8ECF8",
  200: "#AFDAF2",
  300: "#7CC0E8",
  400: "#33A2DE",
  500: "#0193DC",
  600: "#0174B2",
  700: "#075C90",
  800: "#0D4C77",
  900: "#10405F",
  950: "#0A2A42",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        crest,
        brand: crest,
        accent: {
          DEFAULT: "#D9281F",
          light: "#E4433A",
        },
        ink: {
          DEFAULT: "#151642",
          deep: "#0C0D29",
        },
        mist: "#F4F7FB",
        haze: "#DFE5F3",
        ember: "#D9281F",
      },
      fontFamily: {
        display: ['"Sora"', "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ['"Sora"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 18px 45px -30px rgba(11, 12, 40, 0.35)",
        lift: "0 16px 35px -20px rgba(11, 12, 40, 0.4)",
      },
    },
  },
  plugins: [],
};
