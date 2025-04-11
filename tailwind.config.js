// filepath: /Users/admin/Desktop/AURADEV/Aura-Dev-FrontEnd/tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        special: ['"Special Gothic Expanded One"', 'sans-serif'], // Add the new font
      },
    },
  },
  plugins: [],
};
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        aspal: ['Aspal', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

