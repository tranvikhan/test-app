module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "cover-image": "url('/src/assets/image/cover-image.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
