import { create } from "zustand";
import { IKeyStore, IKeyboardStore } from "./interfaces";
import { wordLength, numberOfAttempts, wordOfTheDay } from "./constants";

export const useKeyboardStore = create<IKeyboardStore>()((set) => ({
  keyboardChars: [
    {
      keyCharacter: "q",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "w",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "e",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "r",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "t",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "y",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "u",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "i",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "o",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "p",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "a",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "s",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "d",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "f",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "g",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "h",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "j",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "k",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "l",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "enter",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "z",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "x",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "c",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "v",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "b",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "n",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "m",
      backgroundType: "neutral",
    },
    {
      keyCharacter: "backspace",
      backgroundType: "neutral"
    }
  ],
  updateKeyboardChars(updatedKeyboardChars) {
    set((state) => ({ keyboardChars: [...updatedKeyboardChars] }));
  },
}));

export const useKeyStore = create<IKeyStore>()((set, get) => ({
  isUpdatable: true,
  isRemovable: false,
  isGameOver: false,
  responseArray: [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  updateResponseArray(letter) {
    if (!get().isGameOver) {
      let tempArray = get().responseArray;
      get().updateIndices(false);
      const i = get().responseRow;
      const j = get().responseColumn;

      if (get().isUpdatable) {
        tempArray[i][j] = letter;
        set((state) => ({
          responseArray: [...tempArray],
          isUpdatable: !(j + 1 === wordLength),
        }));
      }
    }
  },
  responseColumn: -1,
  responseRow: -1,
  updateIndices(isWordChecked) {
    let i = get().responseRow;
    let j = get().responseColumn;
    let isUpdatableFlag = get().isUpdatable;
    let isGameOverFlag = get().isGameOver;
    if (isWordChecked) {
      i += 1;
      j = -1;
      isGameOverFlag = i === numberOfAttempts;
      isUpdatableFlag = i !== numberOfAttempts;
    } else {
      if (isUpdatableFlag) {
        if (i === -1 && j === -1) {
          i = 0;
          j = 0;
        } else {
          j += 1;
        }
      }
    }
    set({
      responseRow: i,
      responseColumn: j,
      isUpdatable: isUpdatableFlag,
      isGameOver: isGameOverFlag,
    });
  },
  checkWord() {
    if (!get().isGameOver) {
      const word = get().responseArray[get().responseRow].join("");

      get().updateIndices(true);
      for (let i = 0; i < wordLength; i++) {
        const letter = word[i]

      }
      // get().updateIndices(true);
      // set({ isUpdatable: true, responseRow: i, responseColumn: -1 });

      return word === wordOfTheDay;
    }
  },
  removeLetter() {
    // if (get().isRemovable) {
    //   const word = get().responseArray;
    //   word[get().responseRow][get().responseColumn] = "";
    //   const [i, j] = get().updateIndices();
    //   console.log(i, j);
    //   set((state) => ({
    //     responseArray: [...word],
    //     responseColumn: j,
    //     responseRow: i,
    //   }));
    // }
  },
}));
