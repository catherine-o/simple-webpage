/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "mistralBeige": "#F5F0DF",
        "mistralGreyText": "#444444",
        "mistralGreyLight": "#F9F9F9",
        "mistralGreyMedium": "#EEEEEE",
        "mistralOrange": "#FF7000",
        "focusOrange": "#FF9119",
      },
      fontFamily: {
        body: "Manrope",
        heading: "Sora",
        sans: ["Manrope"],
      }
    },
  },
  plugins: [],
}

