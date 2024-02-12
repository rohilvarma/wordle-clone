'use client'

import { useKeyStore } from "@/lib/store"
import Cell from "./Cell"

const ResponseGrid = () => {
  const {responseArray, responseColumn, responseRow} = useKeyStore()

  return <main className="mt-8">
    <div className={`grid gap-y-1 place-items-center w-[300px] mx-auto`}>
      {
        responseArray.map((word, wordIndex) => {
          return <div key={wordIndex} className="grid grid-cols-5 gap-x-1">
            {word.map((letter, index) => <Cell key={index} keyCharacter={letter} isFocus={responseRow === wordIndex && responseColumn === index} backgroundType={'neutral'} />)}
          </div>
        })
      }
    </div>
  </main>
}

export default ResponseGrid