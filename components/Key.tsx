import { getColors } from "@/utils/server";
import { iconSize } from "@/utils/constants";
import { ILetter } from "@/utils/interfaces";
import { IoBackspace } from "react-icons/io5";
import { useResponseStore } from "@/utils/response-store";
import { useKeyboardStore } from "@/utils/keyboard-store";
import { MouseEvent } from "react";

const Key = ({ letter, letterBg }: ILetter) => {
  const { isFull, push, checkWord, pop } = useResponseStore();
  const { keyboardChars } = useKeyboardStore();

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
