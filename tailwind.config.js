/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['Vollkorn', 'serif'],
    },
    colors: {
      'primary-300': '#FDBF86',
      primary: '#D67418',
      'primary-700': '#793F09',
      'primary-800': '#653203',
      'primary-900': '#422102',
    },
    extend: {},
  },
  plugins: [],
};
