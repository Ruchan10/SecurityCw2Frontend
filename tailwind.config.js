/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#84cc16",
          secondary: "#a3e635",
          accent: "#65a30d",
          neutral: "#d9f99d",
          "base-100": "#ecfccb",
          info: "#2463eb",
          success: "#16a249",
          warning: "#db7706",
          error: "#dc2828",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-flip"),
    require("@tailwindcss/forms"),
  ],
};
