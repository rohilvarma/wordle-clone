export interface ILetter {
  letter: string;
  letterBg: "neutral" | "correct" | "partial" | "incorrect";
  isFocus?: boolean;
}

export interface IKeyboardStore {
  keyboardChars: ILetter[];
  updateKeyboardChars: (updatedKeyboardChars: ILetter[]) => void;
}

export interface IResponseStore {
  isGameOver: boolean;
  responseArray: ILetter[][];
  attemptIndex: number;
  win: boolean;
  push: (letter: string) => void;
  pop: () => void;
  isFull: () => boolean;
  isEmpty: () => boolean;
  updateAttempt: () => void;
  checkWord: () => void;
}
