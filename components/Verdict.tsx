import Confetti from "react-confetti";

const Verdict = ({ win }: { win: boolean }) => {
  return win ? (
    <Confetti width={window.innerWidth} height={window.innerHeight} />
  ) : (
    <main className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/75 z-10">
      <p className="text-3xl">Better luck next time!</p>
    </main>
  );
};

export default Verdict;
