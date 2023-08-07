module.exports = {
  purge: [
    "./src/**/*.{js,jsx,html}",
    "./app/**/*.{js,jsx,html}",
    "./pages/**/*.{j,jsx,html}",
  ],
  content: [
    "./app/**/*.{j,jsx,html}",
    "./pages/**/*.{j,jsx,html}",
    "./src/**/*.{j,jsx,html}",
  ],
  plugins: [],
  theme: {
    extend: {
      screens: {
        xs: "500px",
    },
    },
  },
};
