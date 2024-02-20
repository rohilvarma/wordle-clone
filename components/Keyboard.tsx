"use client";

import { useEffect } from "react";
import { useKeyboardStore } from "@/utils/keyboard-store";
import Key from "./Key";
import { useResponseStore } from "@/utils/response-store";

const Keyboard = () => {
  const { isFull, push, checkWord, pop } = useResponseStore();
  const { keyboardChars } = useKeyboardStore();

  useEffect(() => {
    function handleKeydownEvent(event: KeyboardEvent): void {
      const newCharacter = event.key.toLowerCase();
      if (keyboardChars.some((obj) => obj.letter === newCharacter)) {
        if (newCharacter === "enter") {
          if(isFull()) {
            checkWord();
          }
        } else if (newCharacter === "backspace") {
          pop();
        } else {
          push(newCharacter);
        }
      }
    }
    window.addEventListener("keydown", handleKeydownEvent);
    return () => {
      window.removeEventListener("keydown", handleKeydownEvent);
    };
  });

  return (
    <section className="fixed bottom-2 lg:bottom-8 left-0 right-0 flex flex-col items-center gap-y-1">
      <div className="flex gap-x-1 justify-center">
        {keyboardChars.slice(0, 10).map((letter, index) => (
          <Key key={index} {...letter} />
        ))}
      </div>
      <div className="flex gap-x-1 justify-center">
        {keyboardChars.slice(10, 19).map((letter, index) => (
          <Key key={index} {...letter} />
        ))}
      </div>
      <div className="flex gap-x-1 justify-center">
        {keyboardChars.slice(19).map((letter, index) => (
          <Key key={index} {...letter} />
        ))}
      </div>
    </section>
  );
};

export default Keyboard;
