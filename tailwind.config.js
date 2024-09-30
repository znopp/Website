module.exports = {
  darkMode: "class",
  content: [
    "./assets/index.html",
    "./assets/html/**/*.html",
    "./assets/js/**/*.js"
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
        accent: {
          1: "hsl(255 35% 28%)",
          2: "hsl(12 62% 56%)"
        },
        dark: {
          1: "#2e3440",
          2: "#3b4252",
          3: "#434c5e",
          4: "#4c566a",
        },
        light: {
          1: "#d8dee9",
          2: "#e5e9f0",
          3: "#eceff4"
        }
      }
    }
  },
  plugins: [],
}