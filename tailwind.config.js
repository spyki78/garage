/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primaryColor: "#f7b132",
      secondaryColor: "#29bb9c",
      thirdColor:"rgb(220 38 38)",
      primaryColorHover: "#",
    },
  },
  plugins: [],
};
