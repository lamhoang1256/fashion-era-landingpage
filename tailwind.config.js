/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black32: "#323232",
        yellowfb: "#FBD103",
        green00: "#004743",
        green74: "#74CA4D",
      },
      backgroundImage: {
        "baby-pattern": "url('/images/baby-pattern.png')",
        "review-bg": "url('/images/review-bg.png')",
      },
    },
  },
  plugins: [],
};
