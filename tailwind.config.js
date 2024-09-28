module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./assets/html/**/*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(255 35% 28%)",
          2: "hsl(12 62% 56%)"
        },
        dark: {
          1: "hsl(220 28% 22%)",
          2: "hsl(222 28% 28%)",
          3: "hsl(222 29% 34%)",
          4: "hsl(222 29% 40%)",
        },
        light: {
          1: "hsl(219 9% 78%)",
          2: "hsl(219 7% 84%)",
          3: "hsl(218 5% 90%)",
          4: "hsl(218 3% 96%)"
        }
      }
    }
  },
  plugins: [],
}