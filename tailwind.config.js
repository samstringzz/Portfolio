/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        page: "90rem",
      },
      colors: {
        surface: {
          DEFAULT: "#061018",
          raised: "#0a1a28",
          card: "#102d44",
          muted: "#1e3851",
        },
        accent: {
          DEFAULT: "#34d399",
          muted: "#10b981",
        },
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
