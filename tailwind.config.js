/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        lora: "'Lora', serif",
      },
      colors: {
        mermud: "#FC4150",
        butu: "#393939",
        bumud: "#EEEEEE",
      },
      padding: {
        side: "90px",
      },
    },
  },
  plugins: [],
};
