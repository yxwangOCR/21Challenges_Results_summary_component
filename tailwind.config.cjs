/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors: {
      'red': 'hsl(0, 100%, 67%)',
      'yellow': 'hsl(39, 100%, 56%)',
      'green': 'hsl(166, 100%, 37%)',
      'blue': 'hsl(234, 85%, 45%)',
      'slateBlue': 'hsl(252, 100%, 67%)',
      'royalBlue': 'hsl(241, 81%, 54%)',
      'violetBlue': 'hsla(256, 72%, 46%, 1)',
      'persianBlue': 'hsla(241, 72%, 46%, 0)',
      'white': 'hsl(0, 0%, 100%)',
      'paleBlue': 'hsl(221, 100%, 96%)',
      'lightLavender': 'hsl(241, 100%, 89%)',
      'grayBlue': 'hsl(224, 30%, 27%)'
    },
    fontFamily: {
      text: ['Hanken Grotesk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
