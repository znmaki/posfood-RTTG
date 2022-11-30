/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'smobile': {'min': '300px', 'max': '639px'},
      // => @media (min-width: 640px and max-width: 767px)

      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px)

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px)

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px)

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px)

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1535px)
    },
    extend: {
      colors: {
        "primary": "#F05756",
        "reddish-black": "#261C23",
        "black-cuztse": "#17181F",
        "light-black": "#1F2029",
        "lead-cuztse": "#6A6B71",
        "light-gray": "#7b7d8c",
      },
    },
  },
  plugins: [],
};
