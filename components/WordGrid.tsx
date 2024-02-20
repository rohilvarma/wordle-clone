"use client";

import { wordLength } from "@/utils/constants";
import { useResponseStore } from "@/utils/response-store";
import Letter from "./Letter";

import Verdict from "./Verdict";

const WordGrid = () => {
  const { responseArray, attemptIndex, win, isGameOver } = useResponseStore();
  const renderWordGrid = () => {
    return responseArray.map((word, index) => {
      let wordGrid = [];
      for (let i = 0; i < wordLength; i++) {
        wordGrid.push(
          <Letter
            key={i}
            isFocus={
              index === attemptIndex &&
              word[i] !== undefined &&
              word[i + 1] === undefined
            }
            letter={word[i] === undefined ? "" : word[i].letter}
            letterBg={word[i] === undefined ? "neutral" : word[i].letterBg}
          />
        );
      }
      return (
        <div
          key={index}
          className={`grid grid-cols-5 place-items-center gap-1`}
        >
          {wordGrid}
        </div>
      );
    });
  };
  return (
    <main className={`w-[300px] mx-auto mt-8`}>
      {isGameOver && <Verdict win={win} />}
      {renderWordGrid()}
    </main>
  );
};

export default WordGrid;
