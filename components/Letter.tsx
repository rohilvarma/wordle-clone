import { ILetter } from "@/utils/interfaces";
import { getColors } from "@/utils/server";
const Letter = ({ letter, letterBg, isFocus }: ILetter) => {
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
