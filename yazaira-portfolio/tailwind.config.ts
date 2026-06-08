import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:   "#F5EFE6",
        primary: "#883B43",
        secondary:"#502710",
        ink:     "#130A0D",
        muted:   "#6B5455",
        border:  "#D9CEC5",
        paper:   "#FEFCF8",
        paper2:  "#FAF6EF",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
