import { keyboardChars } from "@/lib/constants";
import Key from "./Key";
const Keyboard = () => {
  return (
    <section className="flex flex-col gap-y-1">
      <div className="flex gap-x-1 justify-center">
        {keyboardChars.slice(0, 10).map((key, index) => (
          <Key key={index} keyCharacter={key} />
        ))}
      </div>
      <div className="flex gap-x-1 justify-center">
        {keyboardChars.slice(10, 19).map((key, index) => (
          <Key key={index} keyCharacter={key} />
        ))}
      </div>
      <div className="flex gap-x-1 justify-center">
        {keyboardChars.slice(19).map((key, index) => (
          <Key key={index} keyCharacter={key} />
        ))}
      </div>
    </section>
  );
};

export default Keyboard;
