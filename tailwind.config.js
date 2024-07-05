/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              aqua: {
                  lightest: '#e0ffff',
                  light: '#b3ffff',
                  DEFAULT: '#80ffff',
                  dark: '#4dffff',
                  darkest: '#1aFFFF',
              },
          },
      },
  },
  plugins: [require("daisyui")],
};
