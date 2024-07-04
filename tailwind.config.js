
module.exports = {
  content: ["./src/**/**/*.{jsx,js}"],
  theme: {
    extend: {},
    screens: {
      vsm: "320px", //very small
      msm: "375px", //medium small
      sm: "425px", //small
      md: "767px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "2560px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '0 3px 6px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-xl': {
          textShadow: '0 5px 8px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-2xl': {
          textShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
