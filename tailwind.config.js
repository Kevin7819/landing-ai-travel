/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hopperPink: "#ff7aa2",
        hopperPurple: "#a45ee5", 
        hopperBlue: "#5ec4ff",
        hopperLight: "#fef9ff",
        hopperDark: "#1c1b29",
        customGray: "#F6F6F6",
      },
      gradientColorStops: {
        hopper: ["#ff7aa2", "#a45ee5", "#5ec4ff"],
      },
      backgroundColor: {
        'custom-gray': '#F6F6F6',
      }
    },
  },
  plugins: [],
};