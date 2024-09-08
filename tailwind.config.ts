import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: [
        'var(--font-inter)',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
      ],
    },
    screens: {
      xl: '1280px',
      lg: '1024px',
      'md-large': '890px',
      md: '768px',
      sm: '640px',
      xs: '480px',
    },
    extend: {
      colors: {
        black: {
          DEFAULT: 'var(--black)',
          bg: 'var(--black-bg)',
          4: 'var(--black-4)',
          '/100': 'var(--black-100)',
        },
        body: {
          black: 'var(--body-black)',
        },
        heading: {
          black: {
            DEFAULT: 'var(--heading-black)',
            '/80': 'var(--heading-black-80)',
          },
        },
        subheading: {
          black: 'var(--subheading-black)',
        },
        grey: {
          1: 'var(--grey-1)',
          2: 'var(--grey-2)',
          3: 'var(--grey-3)',
          4: 'var(--grey-4)',
        },
        white: {
          DEFAULT: 'var(--white)',
          '[0.08]': 'var(--white-008)',
          '20': 'var(--white-20)',
          '70': 'var(--white-70)',
        },
        blue: {
          1: 'var(--blue-1)',
        },
        green: {
          1: 'var(--green-1)',
        },
        yellow: {
          1: 'var(--yellow-1)',
          2: 'var(--yellow-2)',
        },
        red: {
          1: 'var(--red-1)',
        },
      },
      fontSize: {
        52: '3.25rem',
        72: '4.5rem',
      },
    },
  },
  plugins: [],
}
export default config
