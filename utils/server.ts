import { wordleWords } from "./constants";

export const wordOfTheDay: string = wordleWords[Math.floor(Math.random() * wordleWords.length)];

export const getColors = (bgType: string, isKey: boolean = false) => {
  switch (bgType) {
    case "partial":
      return "bg-partial_yellow_light dark:bg-partial_yellow_dark text-white";
    case "correct":
      return "bg-correct_green_light dark:bg-correct_green_dark text-white";
    case "incorrect":
      return "bg-incorrect_gray_light dark:bg-incorrect_focus_gray_dark text-white";
    default:
      return isKey
        ? "bg-ring_key_gray_light dark:bg-key_gray_dark text-black dark:text-text_dark"
        : "";
  }
};