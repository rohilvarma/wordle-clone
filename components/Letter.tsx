import { ILetter } from "@/utils/interfaces";

const Letter = ({ letter, letterBg, isFocus }: ILetter) => {
  const getColors = (bgType: string, isKey: boolean = false) => {
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
  return (
    <div
      className={`text-3xl mb-1 pt-2 text-center w-14 h-14 border-2 font-extrabold uppercase ${
        isFocus
          ? "dark:border-incorrect_focus_gray_dark border-focus_gray_light"
          : "dark:border-ring_gray_dark border-ring_key_gray_light"
      } ${getColors(letterBg)}`}
    >
      {letter}
    </div>
  );
};

export default Letter;
