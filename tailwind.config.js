/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: { //for background-color property
        card: {
          main: '#FFFFFF',
          epic: '#E9E6FD',
          red: '#DE350B',
          label: '#D3D3D3'
        },
        checkbox: {
          main: '#E3FCEF',
          arrow: '#006644',
        },
      },
      textColor: {
        epic: '#3E368F',
        grey: {
          1: '#9A9A9A',
          2: '#D3D3D3',
          3: '#EEEEEE',
        },
        white: '#FFFFFF',
        charcoal: '#333333',
        body: '#676767',
        teal: '#468189',
      },
      backgroundImage: {
        mainGradient: 'linear-gradient(116.7deg, rgba(70, 129, 137, 0.1) 9.51%, rgba(7, 87, 98, 0.1) 95.18%)',
      },
    },
  },
  plugins: [],
}
