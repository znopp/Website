/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js}",
    "./*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"Jetbrains Mono"', 'monospace'],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        dark: {
          1: "#2e3440",
          2: "#3b4252",
          3: "#434c5e",
          4: "#4c566a",
        },
        light: {
          1: "#BBBEC1",
          2: "#CACDD1",
          3: "#D9DDE2",
          4: "#eceff4"
        }
      },
      animation: {
        'fade-fast': 'fadeIn 0.5s ease-in-out forwards',
        'fade-normal': 'fadeIn 1s ease-in-out forwards',
        'fade-slow': 'fadeIn 1.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animationDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1100': '1100ms',
        '1200': '1200ms'
      },
      animationDuration: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
        '1200': '1200ms'
      },
      screens: {
        "desktop": "1080px"
      }
    }
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
      animationDelay: ['responsive', 'motion-safe', 'motion-reduce'],
      animationDuration: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    function({ addUtilities, theme, variants }) {
      const animationDelayUtilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
        return {
          [`.animate-delay-${key}`]: { animationDelay: value },
        }
      })

      addUtilities(animationDelayUtilities, variants('animationDelay'))

      const animationDurationUtilities = Object.entries(theme('animationDuration')).map(([key, value]) => {
        return {
          [`.animate-duration-${key}`]: { animationDuration: value },
        }
      })

      addUtilities(animationDurationUtilities, variants('animationDuration'))
    },
  ],
}

