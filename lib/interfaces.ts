export interface IKey {
  keyCharacter: string;
  backgroundType: 'neutral' | 'incorrect' | 'correct' | 'partial'
}

export interface ICell extends IKey {
  isFocus: boolean
}

export interface IKeyboardStore {
  keyboardChars: IKey[];
  updateKeyboardChars: (updatedKeyboardChars: IKey[]) => void
}

export interface IKeyStore {
  isUpdatable: boolean;
  isRemovable: boolean;
  isGameOver: boolean;
  responseArray: string[][];
  updateResponseArray: (letter: string) => void;
  responseRow: number;
  responseColumn: number;
  updateIndices: (isWordChecked: boolean) => void;
  checkWord: () => boolean | void;
  // removeLetter: () => void;
}