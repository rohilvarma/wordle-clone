import { create } from "zustand";
import { IKeyStore } from "./interfaces";
import { wordLength, numberOfAttempts } from "./constants";

export const useKeyStore = create<IKeyStore>()((set, get) => ({
  isUpdatable: true,
  responseArray: [
    // ['r', 'o', 'h', 'i', 'l'],
    // ['i', 's', '', '', ''],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ],
  updateResponseArray(letter) {
    let tempArray = get().responseArray;
    const [i, j] = get().updateIndices();
    if (get().isUpdatable) {
      tempArray[i][j] = letter;
      set((state) => ({
        responseArray: [...tempArray],
        responseColumn: j,
        responseRow: i,
      }));
    }
  },
  responseColumn: -1,
  responseRow: -1,
  updateIndices() {
    let i = get().responseRow;
    let j = get().responseColumn;

    if (i === -1 && j === -1) {
      return [0, 0];
    }
    if (j + 1 === wordLength) {
      i += 1;
      j = 0;
    } else {
      j += 1;
    }
    if (i=== numberOfAttempts) {
      set({ isUpdatable: false });
    }
    return [i, j];
  },
}));
