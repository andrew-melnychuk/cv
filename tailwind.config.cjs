/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
  darkMode: 'media',
  mode: 'jit',
  theme: {
    screens: {
      'a4': '210mm',

    },
    extend: {
      boxShadow: {
        'md-bottom': '-6px 0 rgb(var(--background-color)), 6px 0 rgb(var(--background-color)), 0 3px 2px -3px rgb( 0 0 0 / 0.25)',
      },
      colors: {
        'secondary': "rgb(var(--secondary-text-color))",
        'label': "rgb(var(--label-text-color))"
      }
    }
  }
};
