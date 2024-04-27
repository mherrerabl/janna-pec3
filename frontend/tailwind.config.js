/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");


module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      primary: '#FAE9EC',
      secundary: {
        DEFAULT: '#CF647F',
        100: '#FAE9EC',
        200: '#F6DEE3',
        300: '#EBB6C2',
        400: '#DF8DA0',
        500: '#CF647F',
        600: '#B94568',
        700: '#9B3557',
        800: '#822F4D',
        900: '#702B46',
      },
      third: {
        DEFAULT: '#FAA300',
        100: '#FFF5C5',
        200: '#FFEC85',
        300: '#FFDB46',
        400: '#FFC81B',
        500: '#FAA300',
        600: '#E27D00',
        700: '#BB5602',
        800: '#984208',
        900: '#7C370B',
      },
      grey: '#F2F4F8',
      darkGrey: '#4D4D4D',
      lightGrey: '#F9F9F9',
      black: '#000',
      white: '#fff',
      transparent: colors.transparent
    },

    fontFamily: {
      title: ['Aboreto', 'Times New Roman', 'serif'],
      text: ['Jost', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"',
      'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
    },

    fontSize: {
      'h1': '42px',
      'h2': '32px',
      'h3': '24px',
      'h4': '20px',
      'h5': '18px',
      'h6': '16px',
      'l': '18px',
      'm': '16px',
      's': '14px',
      'xs': '12px',
      'xxs': '10px',
    },

    lineHeight: {
      '110': '110%',
      '140': '140%'
    },

    letterSpacing: {
      '0.5': '0.5px'
    },

    extend: {
      boxShadow: {
        'badge-500': '0 0 0 1px #CF647F',
        'badge-600': '0 0 0 1px #B94568',
        'badge-700': '0 0 0 2px #9B3557',
        'badge-disable': '0 0 0 1px #000',
      }
    },
    plugins: [],
  }
}

