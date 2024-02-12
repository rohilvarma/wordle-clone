import { ICell } from "@/lib/interfaces";

const Cell = ({ keyCharacter, isFocus }: ICell) => {
  return (
    <div className={`w-14 h-14 border-2 text-3xl font-extrabold uppercase ${isFocus ? 'dark:border-focus_gray_dark border-focus_gray_light': 'dark:border-ring_gray_dark border-ring_key_gray_light'}`}>
      <p className="w-fit pt-2 m-auto">
      {keyCharacter}
      </p>
    </div>
  );
};

export default Cell;
