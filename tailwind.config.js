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
        primary: {
          blue: "#3b82f6",
          purple: "#8b5cf6",
        },
        light: {
          blue: "#dbeafe",
          purple: "#f3e8ff",
        },
        dark: {
          blue: "#1e40af", 
          purple: "#6d28d9",
        },
        customGray: "#F6F6F6",
      },
      gradientColorStops: {
        'blue-purple': ["#3b82f6", "#8b5cf6"],
      },
      backgroundColor: {
        'custom-gray': '#F6F6F6',
      },
      backgroundImage: {
        'blue-purple-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'blue-purple-gradient-light': 'linear-gradient(135deg, #3b82f620 0%, #8b5cf620 100%)',
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
          'from': { boxShadow: '0 0 20px -10px #3b82f6' },
          'to': { boxShadow: '0 0 20px -5px #8b5cf6' },
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