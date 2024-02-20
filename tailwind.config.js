/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      xs: '425px',
      // => @media (min-width: 425px) { ... }

      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      '2lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      xl: '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1920px'
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors:{
        primary:{
          default: "#CB1B1B",
          shade6: "#430909",
          shade5: "#5A0C0C",
          shade4: "#700F0F",
          shade3: "#871212",
          shade2: "#9E1515",
          shade1: "#B41818",
          tint7: "#E43434",
          tint6: "#F66262",
          tint5: "#FCA197",
          tint4: "#F6BBBB",
          tint3: "#F9D2D2",
          tint2: "#FCE8E8",
          tint1: "#FDF1F1",
        },
        neutral:{
          black: "#0C0C0C",
          gray13: "#121212",
          gray12: "#212121",
          gray11: "#353535",
          gray10: "#505050",
          gray9: "#717171",
          gray8: "#909090",
          gray7: "#ADADAD",
          gray6: "#CBCBCB",
          gray5: "#D9D9D9",
          gray4: "#E1E1E1",
          gray3: "#EDEDED",
          gray2: "#F9F9F9",
          gray1: "#FAFAFA",
          white: "#FFFFFF"
        },
        state:{
          error: "#C30000",
          errorlight1: "#ED2E2E",
          errorlight2: "#FFF2F2",
          success: "#00966D",
          successlight1: "#00BA88",
          successlight2: "#F3FDFA",
          warning: "#A9791C",
          warninglight1: "#F4B740",
          warninglight2: "#FFF8E1"
        }
      }
    },
  },
  plugins: [],
}

