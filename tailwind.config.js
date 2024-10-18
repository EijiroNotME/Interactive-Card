/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#21092F",
          LIGHT: "#8E8593",
          LIGHTER: "#DEDDDF",
        },
        custom: {
          0: "#6448FE",
          100: "#600594",
        },
        error: {
          DEFAULT: "#FF5252",
        },
      },
    },
  },
  plugins: [],
};
