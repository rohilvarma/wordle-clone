'use client'
import { iconSize } from "@/lib/constants";
import { IKey } from "@/lib/interfaces";
import React from "react";
import { FaBackspace } from "react-icons/fa";
import { useKeyStore } from "@/lib/store";

const Key = ({ keyCharacter }: IKey) => {
  const {updateResponseArray} = useKeyStore()
  return (
    <div
      onClick={() => updateResponseArray(keyCharacter)}
      className={`${
        keyCharacter.toLowerCase() === "enter" || keyCharacter.toLowerCase() === "backspace"
          ? "w-fit px-2"
          : "w-8"
      } font-semibold uppercase text-black dark:text-text_dark bg-ring_key_gray_light dark:bg-key_gray_dark py-4 text-center rounded-lg`}
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
