/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#F05756",
        "reddish-black": "#261C23",
        "black-cuztse": "#17181F",
        "light-black": "#1F2029",
        "lead-cuztse": "#6A6B71",
      },
    },
  },
  plugins: [],
};
