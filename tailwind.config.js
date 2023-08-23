/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#31c1ff',
        primaryBg: '#75c7dd',
      },
      boxShadow: {
        article: '0 2px 7px rgba(130, 163, 173, 0.28)',
        articleHover: '0 2px 30px rgba(130, 163, 173, 0.2)',
        scrollToTop: 'rgba(88, 173, 196, 0.22) 0px 4px 17px',
      },
      fontFamily: {
        openSans: "'Open Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
