/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D1B06B",
        primary2: "#1F2732",
        secondary: "#2E3947",
        semiBlack: "#161D27",
        gray: {
          1: "#D7D7D7",
          2: "#4e555f",
          3: "#3B434E",
          4: "#3A4553",
          5: "#909090",
          6: "#FBFBFB",
          7: "#CBCBCB",
        },
        buttonTrans: "rgba(255, 255, 255, 0.10)",
        TopLawyersColor: "rgba(31, 39, 50, 0.85)",
      },
      fontFamily: {
        cormorant: "'Cormorant Garamond', serif",
        outfit: "'Outfit', sans-serif",
      },
      screens: {
        "2xl": "1400px",
      },
      backgroundImage: {
        homeLanding: "url('./images/landing-bg.png')",
        TroubleCardBg: "url('./images/TroubleCardBg.png')",
        TopLawyersBg: "url('./images/TopLawyersBg.png')",
      },
    },
  },
  plugins: [],
};
