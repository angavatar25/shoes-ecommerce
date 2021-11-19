module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        neutral: {
          veryDarkBlue: 'hsl(220, 13%, 13%)',
          darkGrayishBlue: 'hsl(219, 9%, 45%)',
          grayishBlue: 'hsl(220, 14%, 75%)',
          lightGrayishBlue: 'hsl(223, 64%, 98%)',
        }
      }
    },
    maxWidth: {
      '375p': '375px',
      '1440p': '1440px',
      'max-w-screen-sm': '640px',
      'max-w-screen-md': '768px',
      'max-w-screen-lg': '1024px',
      'max-w-screen-xl': '1280px',
      'max-w-screen-2xl': '1536px'

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
