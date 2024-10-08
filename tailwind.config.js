/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "focusOrange": "#FF9119",
        "heroDark": "rgba(60, 26, 0, .83)",
        "heroLight": "rgba(249, 128, 0, .5)",
        "mistralBeige": "#F5F0DF",
        "mistralGreyText": "#444444",
        "mistralGreyLight": "#F9F9F9",
        "mistralGreyMedium": "#EEEEEE",
        "mistralOrange": "#FF7000",
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

