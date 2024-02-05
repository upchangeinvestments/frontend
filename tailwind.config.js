/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{jsx,js}"],
  theme: {
    extend: {},
    screens: {
      'vsm': '320px', //very small
      'msm': '375px', //medium small
      'sm': '425px', //small 
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2560px',
    }
  },
  plugins: [],
}

