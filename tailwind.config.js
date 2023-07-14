/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DC0A2D",
        bug: "#A7B723",
        dark: "#75574C",
        dragon: "#7037FF",
        electric: "#F9CF30",
        fairy: "#E69EAC",
        fighting: "#C12239",
        fire: "#F57D31",
        flying: "#A891EC",
        ghost: "#70559B",
        normal: "#AAA67F",
        grass: "#74CB48",
        ground: "#DEC16B",
        ice: "#9AD6DF",
        poison: "#A43E9E",
        psychic: "#FB5584",
        rock: "#B69E31",
        steel: "#B7B9D0",
        water: "#6493EB",
        darker: "#212121",
        medium: "#666666",
        light: "#E0E0E0",
        background: "#EFEFEF",
      },
      boxShadow: {
        "2dp": "0 1px 3px 1px rgba(0,0,0,0.2)",
        "6dp": "0 3px 12px 3px rgba(0,0,0,0.2)",
        "inner-2dp": "0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;"
      },
      backgroundImage: {
        pokeball: "url('/pokeball-bg.png')"
      },
      minHeight: {
        calcHeight: "calc(100vh - 146px)"
      }
    },
  },
  plugins: [],
};
