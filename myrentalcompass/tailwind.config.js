module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        istok: ["Istok Web", "sans-serif"],
      },
      colors: {
        MainButtonYellow: "#FFCD29",
        NavTextGray: "#404040",
        HeadingTextGray: "#757575",
        FooterButtonYellow: "#F9DE89",
        BackgroundWhite: "#FFFEFC",
      },
    },
  },
  plugins: [],
};
