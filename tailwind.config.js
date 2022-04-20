module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: "'Roboto', sans-serif",
      dmSans: "'DM Sans', sans-serif",
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)'
      }
    },
  },
  plugins: [],
}
