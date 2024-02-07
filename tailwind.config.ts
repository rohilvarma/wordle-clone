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
        focus_gray_dark: "rgb(58,58, 60)",
        ring_gray_dark: "rgb(86, 87, 88)",
        key_gray_dark: "rgb(129, 131, 132)",
        text_dark: "rgb(248, 248, 248)",
        focus_gray_light: "rgb(136, 138 ,140)",
        ring_key_gray_light: "rgb(212, 214, 218)",
        correct_green: "rgb(107, 170, 100)",
        correct_yellow: "rgb(209, 176, 54)"
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
