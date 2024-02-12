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
        incorrect_focus_gray_dark: "rgb(58,58, 60)",
        incorrect_gray_light: "rgb(120, 124 ,126)",
        ring_gray_dark: "rgb(86, 87, 88)",
        key_gray_dark: "rgb(129, 131, 132)",
        text_dark: "rgb(248, 248, 248)",
        focus_gray_light: "rgb(136, 138 ,140)",
        ring_key_gray_light: "rgb(212, 214, 218)",
        correct_green_light: "rgb(107, 170, 100)",
        correct_green_dark: "rgb(83 ,141, 78)",
        partial_yellow_dark: "rgb(181, 159, 59)",
        partial_yellow_light: "rgb(202, 180, 88)"
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
