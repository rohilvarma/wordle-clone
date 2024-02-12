import { iconSize } from "@/lib/constants";
import { IKey } from "@/lib/interfaces";
import { FaBackspace } from "react-icons/fa";
import { useKeyStore } from "@/lib/store";

const Key = ({ keyCharacter, backgroundType }: IKey) => {
  const { updateResponseArray, checkWord, isUpdatable } = useKeyStore();
  const eventHandler = (keyCharacter: string) => {
    if (keyCharacter === "enter") {
      if (!isUpdatable) {
        const response = checkWord();
      }
    } else if (keyCharacter === "backspace") {
      // removeLetter()
    } else {
      updateResponseArray(keyCharacter);
    }
  };

  const getColors = (bgType: string) => {
    switch (bgType) {
      case "partial":
        return "bg-partial_yellow_light dark:bg-partial_yellow_dark text-white";
      case "correct":
        return "bg-correct_green_light dark:bg-correct_green_dark text-white";
      case "incorrect":
        return "bg-incorrect_gray_light dark:bg-incorrect_focus_gray_dark text-white";
      default:
        return "bg-ring_key_gray_light dark:bg-key_gray_dark text-black dark:text-text_dark";
    }
  };

  return (
    <div
      onClick={() => eventHandler(keyCharacter.toLowerCase())}
      className={`${
        keyCharacter.toLowerCase() === "enter" ||
        keyCharacter.toLowerCase() === "backspace"
          ? "w-fit px-2"
          : "w-8"
      } font-semibold uppercase ${getColors(
        backgroundType
      )} py-4 text-center rounded-lg`}
    >
      {keyCharacter.toLowerCase() === "backspace" ? (
        <FaBackspace className="" size={iconSize - 5} />
      ) : (
        keyCharacter
      )}
    </div>
  );
};

export default Key;
