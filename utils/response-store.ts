import { create } from "zustand";
import { IResponseStore } from "./interfaces";
import { numberOfAttempts, wordLength, wordOfTheDay } from "./constants";
import { useKeyboardStore } from "./keyboard-store";

export const useResponseStore = create<IResponseStore>()((set, get) => ({
  responseArray: [[], [], [], [], [], []],
  attemptIndex: 0,
  isGameOver: false,
  win: false,
  push(newLetter) {
    if (!get().isGameOver && !get().isFull()) {
      let tempArray = get().responseArray;
      tempArray[get().attemptIndex].push({
        letter: newLetter,
        letterBg: "neutral",
      });
      set((state) => ({ responseArray: [...tempArray] }));
    }
  },
  pop() {
    if (!get().isGameOver && !get().isEmpty()) {
      let tempArray = get().responseArray;
      tempArray[get().attemptIndex].pop();
      set((state) => ({ responseArray: [...tempArray] }));
    }
  },
  isFull() {
    return get().responseArray[get().attemptIndex].length === wordLength;
  },
  isEmpty() {
    return get().responseArray[get().attemptIndex].length === 0;
  },
  updateAttempt() {
    if (get().attemptIndex + 1 === numberOfAttempts) {
      set((state) => ({ isGameOver: true }));
    } else {
      set((state) => ({ attemptIndex: state.attemptIndex + 1 }));
    }
  },
  checkWord() {
    const responseWord = get()
      .responseArray[get().attemptIndex].map((i) => i.letter)
      .join("");
    
    let keyboard = useKeyboardStore.getState().keyboardChars

    let tempResponseArray = get().responseArray
    let tempArray = tempResponseArray[get().attemptIndex]
    for(let i=0 ; i<wordLength ; i++) {
      const currentLetter: string = responseWord[i]
      const keyObject = keyboard.find(k => k.letter === currentLetter)
      if(wordOfTheDay[i] === currentLetter) {
        // right position
        tempArray[i].letterBg = 'correct'
        if(keyObject) {
          keyObject.letterBg = 'correct'
        }
      }
      else if(wordOfTheDay.includes(currentLetter)) {
        // incorrect position
        tempArray[i].letterBg = 'partial'
        if(keyObject && keyObject.letterBg !== 'correct') {
          keyObject.letterBg = "partial"
        }
      }
      else {
        // incorrect word
        tempArray[i].letterBg = "incorrect"
        if(keyObject) {
          keyObject.letterBg = 'incorrect'
        }
      }
    }
    set(state => ({responseArray: [...tempResponseArray]}))
    useKeyboardStore.getState().updateKeyboardChars(keyboard)
    if(responseWord === wordOfTheDay) {
      set({isGameOver: true, win: true})
    }
    else {
      // change WordGrid background and Keyboard Background
      get().updateAttempt();
    }
  },
}));
