/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black32: "#323232",
        yellowfb: "#FBD103",
        green00: "#004743",
      },
      backgroundImage: {
        "baby-pattern": "url('/images/baby-pattern.png')",
      },
      gradientColorStops: {
        gradientBlue: "radial-gradient(64% 195.84% at 96.3% 9%, #6CDDFF 0%, #58C4E4 100%)",
      },
    },
  },
  plugins: [],
};
