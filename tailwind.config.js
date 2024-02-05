const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: colors.red,
      green: colors.green,
      Elements: {
        CardBackground: "#fffffe",
        Headline: "#094067",
        Paragraph: "#5f6c7b",
        Button: "#3da9fc",
        ButtonText: "#fffffe",
      },
      Illustration: {
        Stroke: "#094067",
        Main: "#fffffe",
        Highlight: "#3da9fc",
        Secondary: "#90b4ce",
        Tertiary: "#ef4565",
      },
    },
    extend: {},
  },
  plugins: [],
};
