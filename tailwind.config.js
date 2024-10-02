/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lite-gray': '#f1f3f2', //body background color
        'primary-green': '#059862',
        'primary-green-lite': '#037a43',
        'filter-bar-gray' : '#e8eae9'
      },
    },
    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }
  
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }
  
      'laptop': '1150px',
      // => @media (min-width: 1024px) { ... }
  
      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}