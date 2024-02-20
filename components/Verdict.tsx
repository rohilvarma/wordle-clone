import Confetti from "react-confetti";
import { wordOfTheDay } from "@/utils/server";

const Verdict = ({ win }: { win: boolean }) => {
  return win ? (
    <Confetti width={window.innerWidth} height={window.innerHeight} />
  ) : (
    <main className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/75 z-10 text-xl lg:text-3xl text-center text-white">
      <div className="">
        <p className="">Better luck next time!</p>
        <p className="mt-2">
          The word was <span className="italic uppercase">{wordOfTheDay}</span>.
        </p>
      </div>
    </main>
  );
};

export default Verdict;
