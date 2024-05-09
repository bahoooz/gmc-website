import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Ici, vous pouvez définir vos propres points d'arrêt pour les media queries
        mdlarge: "1024px",
        smallsm: "480px"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
