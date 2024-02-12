export interface IKey {
  keyCharacter: string;
}

export interface ICell extends IKey {
  isFocus: boolean
}

export interface IKeyStore {
  isUpdatable: boolean;
  responseArray: string[][];
  updateResponseArray: (letter: string) => void;
  responseRow: number;
  responseColumn: number;
  updateIndices: () => [number, number];
}