import { iconSize } from "@/utils/constants";
import { ILetter } from "@/utils/interfaces";
import { IoBackspace } from "react-icons/io5";
import { useResponseStore } from "@/utils/response-store";
import { useKeyboardStore } from "@/utils/keyboard-store";
import { MouseEvent } from "react";

const Key = ({ letter, letterBg }: ILetter) => {
  const { isFull, push, checkWord, pop } = useResponseStore();
  const { keyboardChars } = useKeyboardStore();
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
  function handleClick(event: MouseEvent<HTMLElement>) {
    if (keyboardChars.some((obj) => obj.letter === letter)) {
      if (letter === "enter") {
        if (isFull()) {
          checkWord();
        }
      } else if (letter === "backspace") {
        pop();
      } else {
        push(letter);
      }
    }
  }
  return (
    <div
      className={`${getColors(letterBg, true)} uppercase rounded-lg px-2 py-4 ${
        letter === "enter" || letter === "backspace" ? "w-fit px-2" : "w-8"
      } text-center`}
      onClick={handleClick}
    >
      {letter === "backspace" ? <IoBackspace size={iconSize - 10} /> : letter}
    </div>
  );
};

export default Key;
