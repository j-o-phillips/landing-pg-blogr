const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#ff0000",

      lightRed: "hsl(356, 100%, 66%)",
      veryLightRed: "hsl(355, 100%, 74%)",
      veryDarkBlue: "hsl(208, 49%, 24%)",

      grayishBlue: "hsl(240, 2%, 79%)",
      veryDarkGrayishBlue: "hsl(207, 13%, 34%)",
      veryDarkBlackBlue: "hsl(240, 10%, 16%)",

      redGradStart: "hsl(13, 100%, 72%)",
      redGradEnd: "hsl(353, 100%, 62%)",

      bgGradStart: "hsl(237, 17%, 21%)",
      bgGradEnd: "hsl(237, 23%, 32%)",
    },
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: "hsl(237, 17%, 21%)",
          },
        },
      },
    }),
  ],
};
