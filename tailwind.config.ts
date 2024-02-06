import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_dark: "rgb(18, 18, 19)",
        ring_gray_dark: "rgb(58,58, 60)",
        focus_gray_dark: "rgb(86, 87, 88)",
        key_gray_dark: "rgb(129, 131, 132)",
        text_dark: "rgb(248, 248, 248)",
        ring_gray_light: "rgb(136, 138 ,140)",
        focus_key_gray_light: "rgb(212, 214, 218)",
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
