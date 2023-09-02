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
        NavTextGray: "#262626",
        HeadingTextGray: "#757575",
        FooterButtonYellow: "#F9DE89",
        BackgroundWhite: "#FFFEFC",
        ShadeGray: "#BFBFBF",
        ResourceButtonYellow: "#fff5cc",
        MapNavGray: "#f5f5f5",
        MapHeadingGray: "#ffffff",
      },
    },
  },
  plugins: [],
};
