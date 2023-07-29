/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    boxShadow: {
      'sm': "0 1px 2px 0 rgb(var(--shadow-color) / 0.05)",
      'md': "0 4px 6px -1px rgb(var(--shadow-color) / 0.1), 0 2px 4px -2px rgb(var(--shadow-color) / 0.1)",
      'lg': "0 10px 15px -3px rgb(var(--shadow-color) / 0.1), 0 4px 6px -4px rgb(var(--shadow-color) / 0.1)",
    },
    screens: {
      'a4': '210mm',
    },
    extend: {
      boxShadow: {
        'xs': '0 1px 3px 0 rgb(var(--shadow-color) / 0.1), 0 1px 2px -1px rgb(var(--shadow-color) / 0.1)',
        'xs-light': '0 1px 3px 0 rgb(var(--shadow-color) / 0.15), 0 1px 2px -1px rgb(var(--shadow-color) / 0.15)',
      },
      colors: {
        'dark-bg': "rgb(var(--label-text-color))",
        'dark-text': "rgb(var(--label-text-color))",
        'label': "rgb(var(--label-text-color))",
        'secondary': "rgb(var(--secondary-text-color))",
      }
    }
  }
};
