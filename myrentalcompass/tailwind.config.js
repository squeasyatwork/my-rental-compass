const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
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
      fontSize: {
        "sm": "0.875rem",
        "md": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
      },
      colors: {
        MainButtonYellow: "#FFCD29",
        ButtonHoverYellow: "#FF7F03",
        NavTextGray: "#262626",
        HeadingTextGray: "#757575",
        FooterButtonYellow: "#F9DE89",
        BackgroundWhite: "#FFFEFC",
        ShadeGray: "#BFBFBF",
        ResourceButtonYellow: "#fff5cc",
        MapNavGray: "#f5f5f5",
        MapHeadingGray: "#ffffff",
        MapMintGreen: '#51c8ac',
        BorderGreen: "#05FFD7",
        MerciPurple: "#6864F7",
        LongContentGray: "#252525"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
