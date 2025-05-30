import { useRef } from "react";
import { GuessKeyBoxProps } from "../types";

export const GuessKeyBox: React.FC<GuessKeyBoxProps> = ({
  row,
  wordGuessingArr,
  column,
  onKeyBoxClicked,
  keyBoxSelected,
  wordsGuessingArr,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const currentGuessRow = wordsGuessingArr.length;
  const isCurrentGuessRow = currentGuessRow === row;

  const isKeyBoxSelected =
    row === keyBoxSelected.row && column === keyBoxSelected.column;

  const onGuessKeyBoxClicked = () => {
    ref.current?.focus();
    ref.current?.blur();
    if (!isCurrentGuessRow) return;
    onKeyBoxClicked(row, column);
  };

  const getLetter = () => {
    if (!isCurrentGuessRow) {
      const wordGuessingArrBefore = wordsGuessingArr[row];
      return wordGuessingArrBefore && wordGuessingArrBefore[column];
    }

    if (!wordGuessingArr.length) return "";

    if (isKeyBoxSelected) return wordGuessingArr[keyBoxSelected.column];

    return wordGuessingArr[column];
  };

  return (
    <div
      ref={ref}
      onClick={onGuessKeyBoxClicked}
      {...(isKeyBoxSelected ? { tabIndex: 0 } : {})}
      className={`w-10 h-10 select-none rounded-md border-2 ${
        isKeyBoxSelected
          ? "border-box-border focus:border-box-border focus:outline-none"
          : "border-gray-400"
      } ${isCurrentGuessRow && "cursor-pointer"}`}
    >
      <p className="h-full grid place-items-center font-bold text-2xl">
        {getLetter()}
      </p>
    </div>
  );
};
