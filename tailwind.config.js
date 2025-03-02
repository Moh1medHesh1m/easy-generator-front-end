// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './node_modules/flowbite-react/**/*.js',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     fontSize: {
//       xs: '0.75rem',
//       sm: '0.875rem',
//       base: '1rem',
//       lg: '1.125rem',
//       xl: '1.25rem',
//       '2xl': '1.5rem',
//       '3xl': '1.875rem',
//       '4xl': '2.25rem',
//       '5xl': '3rem',
//       '6xl': '4rem',
//     },
//     extend: {
//       colors: {
//         gray: {
//           100: '#f7fafc',
//           200: '#edf2f7',
//           300: '#e2e8f0',
//           400: '#cbd5e0',
//           500: '#a0aec0',
//           600: '#718096',
//           700: '#4a5568',
//           800: '#2d3748',
//           900: '#1a202c',
//         },
//         blue: {
//           100: '#ebf8ff',
//           200: '#bee3f8',
//           300: '#90cdf4',
//           400: '#63b3ed',
//           500: '#4299e1',
//           600: '#3182ce',
//           700: '#2b6cb0',
//           800: '#2c5282',
//           900: '#2a4365',
//         },
//       },
//     },
//   },
//   // eslint-disable-next-line global-require
//   plugins: [require('flowbite/plugin')],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#fff',
        primary: {
          DEFAULT: 'hsla(216, 32%, 32%, 1)',
          100: 'hsla(216, 32%, 32%, 1)',
          75: 'hsla(182, 63%, 31%,0.75)',
          50: 'hsla(182, 63%, 31%,0.5)',
          25: 'hsla(182, 63%, 31%,0.25)',
        },
        accent: '#E49A38',
        latte: '#FBF7F4',
        lightOlive: '#DFDFD7',
        succes: {
          light: 'hsla(162, 63%, 31%, 1)',
          DEFAULT: 'hsla(182, 63%, 31%, 1)',
          hover: 'hsla(162, 63%, 31%, 1)',
        },
        danger: {
          light: 'hsla(354, 57%, 90%, 1)',
          DEFAULT: 'hsla(357, 47%, 58%, 1)',
          hover: 'hsla(353, 57%, 59%, 1)',
        },
        warning: {
          light: 'hsla(47, 100%, 87%, 1)',
          DEFAULT: 'hsla(34, 76%, 56%, 1)',
          hover: 'hsla(22, 53%, 52%, 1)',
        },
        info: {
          light: 'hsla(216, 29%, 81%, 1)',
          DEFAULT: 'hsla(216, 34%, 53%, 1)',
        },
        brightRed: 'var(--brightRed)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkGray: 'hsla(214, 6%, 51%, 1)',
        darkGrayishGray: 'hsl(227, 12%, 61%)',
        veryDarkGray: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        blueGray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('flowbite/plugin')],
};
