/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      
      backgroundImage: {
        'home-services-background': 'url(/home-page-service-bg.png)',
        'vscode-screen-background': 'url(/vscode-screen-bg.png)',
        'working-screen-background': 'url(/working-screen-bg.png)',
      },
      gridTemplateColumns: {
        'left-200': '200px 1fr',
        'right-200': '1fr 200px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '4/1': '4 / 1',
        '5/1': '5 / 1',
        '3/1': '3 / 1',
        '2/1': '2 / 1',
        '1/1': '1 / 1',
        '16/9': '16 / 9',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '50%': { opacity: 50 },
          '100%': { opacity: 100 },
        },
      },
      animation: {
        fade: 'fade 1s ease-in-out',
      },
      fontSize: {
        md: '1.2rem',
      },
      colors: {
        'text-color': '#2C0434',

        white: '#ffffff',

        black: '#000000',
        'black-100': 'rgba(0, 0, 0, 0.1)',
        'black-400': 'rgba(0, 0, 0, 0.4)',
        'black-500': 'rgba(0, 0, 0, 0.5)',
        'black-600': 'rgba(0, 0, 0, 0.6)',
        'black-700': 'rgba(0, 0, 0, 0.7)',

        red: '#FF3B30',
        'red-100': '#FFE4E4',
        'red-200': '#fad4d1',
        'red-300': '#f8bfba',
        'red-400': '#f5aaa3',
        'red-500': '#f3948c',
        'red-600': '#f07f75',
        'red-700': '#ee6a5d',
        'red-800': '#ec5446',
        'red-900': '#e93f2f',

        blue: '#2F80ED',
        'blue-100': '#ebf8ff',
        'blue-200': '#bee3f8',
        'blue-300': '#90cdf4',
        'blue-400': '#63b3ed',
        'blue-500': '#4299e1',
        'blue-600': '#3182ce',
        'blue-700': '#2b6cb0',
        'blue-800': '#2c5282',
        'blue-900': '#2a4365',

        gray: '#838080',
        'gray-100': '#F5F5F5',
        'gray-200': '#EBEBEB',
        'gray-300': '#DDDDDD',
        'gray-400': '#B9B9B9',

        primary: '#00DED1',
        'primary-100': '#e6fffd',
        'secondary': '#f8f8f8',

        'primary-linear': 'linear-gradient(180deg, #00DED1 0.52%, #2589FF 100%)',

        background: '#ffffff',

        orange: '#FAA61A',
        'orange-opacity-100': 'rgba(245, 155, 40, 0.1)',

        green: '#14CC62',
        'green-opacity-100': 'rgba(46, 234, 125, 0.3)',

        violet: '#9B51E0',
        'violet-opacity-100': 'rgba(155, 81, 224, 0.1)',

        yellow: '#FFBC4E',

        'att-viscera-odd-bg': '#FCE9FF',
        'att-viscera-even-bg': '#FFF0D7',
      },
      spacing: {
        ['-8']: -8,
        ['-12']: -12,
        ['-16']: -16,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        8: 8,
        10: 10,
        12: 12,
        14: 14,
        16: 16,
        18: 18,
        20: 20,
        24: 24,
        25: 25,
        32: 32,
        35: 35,
        36: 36,
        38: 38,
        40: 40,
        48: 48,
        50: 50,
        55: 55,
        58: 58,
        60: 60,
        65: 65,
        68: 68,
        70: 70,
        78: 78,
        80: 80,
        88: 88,
        90: 90,
        98: 98,
        100: 100,
        125: 125,
        140: 140,
        150: 150,
        175: 175,
        192: 192,
        200: 200,
        '[10%]': '10%',
        '[20%]': '20%',
        '[25%]': '25%',
        '[33%]': '33%',
        '[40%]': '40%',
        '[45%]': '45%',
        '[50%]': '50%',
        '[70%]': '70%',
        '[80%]': '80%',
        '[100%]': '100%',
        '[96vw]': '96vw',
        '[40vw]': '40vw',
        '[100vw]': '100vw',
        '[50vh]': '50vh',
        '[60vh]': '60vh',
        '[70vh]': '70vh',
        '[90vh]': '90vh',
        '[100vh]': '100vh',

        header_height: '84px',
        header_mobile_height: '84px',
      },
      screens: {
        //mobile screen >= 300px
        sm: '300px',

        //tablet screen >= 900px
        md: '900px',

        //desktop screen >= 1024px
        lg: '1024px',

        //large screen screen >= 1200px
        xl: '1200px',

        //super large screen screen >= 1356px
        '2xl': '1356px',
      },
      boxShadow: {
        'shadow-1': '0px 4px 16px rgba(150, 150, 150, 0.12)',
        'shadow-2': '0px 4px 16px rgba(226, 226, 226, 0.32)',
        'shadow-3': '0px 6px 20px rgba(160, 76, 234, 0.06)',
        'shadow-4': '0px 8px 24px rgba(117, 117, 123, 0.1), 0px 4px 16px rgba(169, 169, 172, 0.1)',
      },
      zIndex: {
        0: 0,
        10: 10,
        20: 20,
        30: 30,
        40: 40,
        50: 50,
        60: 60,
        70: 70,
        80: 80,
        89: 89,
        90: 90,
        99: 99,
        100: 100,
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'), // As of Tailwind CSS v3.3, the `@tailwindcss/line-clamp` plugin is now included by default
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
}
