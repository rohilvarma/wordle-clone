import { create } from "zustand";
import { IKeyboardStore } from "./interfaces";

export const useKeyboardStore = create<IKeyboardStore>()((set) => ({
  keyboardChars: [
    {
      letter: "q",
      letterBg: "neutral",
    },
    {
      letter: "w",
      letterBg: "neutral",
    },
    {
      letter: "e",
      letterBg: "neutral",
    },
    {
      letter: "r",
      letterBg: "neutral",
    },
    {
      letter: "t",
      letterBg: "neutral",
    },
    {
      letter: "y",
      letterBg: "neutral",
    },
    {
      letter: "u",
      letterBg: "neutral",
    },
    {
      letter: "i",
      letterBg: "neutral",
    },
    {
      letter: "o",
      letterBg: "neutral",
    },
    {
      letter: "p",
      letterBg: "neutral",
    },
    {
      letter: "a",
      letterBg: "neutral",
    },
    {
      letter: "s",
      letterBg: "neutral",
    },
    {
      letter: "d",
      letterBg: "neutral",
    },
    {
      letter: "f",
      letterBg: "neutral",
    },
    {
      letter: "g",
      letterBg: "neutral",
    },
    {
      letter: "h",
      letterBg: "neutral",
    },
    {
      letter: "j",
      letterBg: "neutral",
    },
    {
      letter: "k",
      letterBg: "neutral",
    },
    {
      letter: "l",
      letterBg: "neutral",
    },
    {
      letter: "enter",
      letterBg: "neutral",
    },
    {
      letter: "z",
      letterBg: "neutral",
    },
    {
      letter: "x",
      letterBg: "neutral",
    },
    {
      letter: "c",
      letterBg: "neutral",
    },
    {
      letter: "v",
      letterBg: "neutral",
    },
    {
      letter: "b",
      letterBg: "neutral",
    },
    {
      letter: "n",
      letterBg: "neutral",
    },
    {
      letter: "m",
      letterBg: "neutral",
    },
    {
      letter: "backspace",
      letterBg: "neutral",
    },
  ],
  updateKeyboardChars(updatedKeyboardChars) {
    set((state) => ({ keyboardChars: [...updatedKeyboardChars] }));
  },
}));
