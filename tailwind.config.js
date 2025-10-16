/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
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
      },
      backgroundImage: {
        'hopper-gradient': 'linear-gradient(135deg, #ff7aa2 0%, #a45ee5 50%, #5ec4ff 100%)',
        'hopper-gradient-light': 'linear-gradient(135deg, #ff7aa220 0%, #a45ee520 50%, #5ec4ff20 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px -10px #ff7aa2' },
          'to': { boxShadow: '0 0 20px -5px #a45ee5' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};