import { useEffect, useRef } from "react";
import { GuessKeyBoxProps } from "../types";

export const GuessKeyBox: React.FC<
  GuessKeyBoxProps & {
    boxRef?: React.RefObject<HTMLDivElement | null>;
  }
> = ({
  row,
  wordGuessingArr,
  column,
  onKeyBoxClicked,
  keyBoxSelected,
  boxRef,
}) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const ref = boxRef ?? internalRef;

  const isFirstRow = row === 0;

  const isKeyBoxSelected =
    row === keyBoxSelected.row && column === keyBoxSelected.column;

  const onGuessKeyBoxClicked = () => {
    ref.current?.focus();
    if (!isFirstRow) return;
    onKeyBoxClicked(row, column);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      const active = document.activeElement;
      if (
        active === ref.current &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        e.preventDefault();
        ref.current.focus();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const getLetter = () => {
    if (!isFirstRow || !wordGuessingArr.length) return "";

    if (keyBoxSelected.column === column) {
      return wordGuessingArr[keyBoxSelected.column];
    }

    return wordGuessingArr[column];
  };

  return (
    <div
      ref={ref}
      onClick={onGuessKeyBoxClicked}
      {...(isFirstRow ? { tabIndex: 0 } : {})}
      className={`w-10 h-10 select-none rounded-md border-2 ${
        isKeyBoxSelected
          ? "border-box-border focus:border-box-border focus:outline-none"
          : "border-gray-400"
      } ${isFirstRow && "cursor-pointer"}`}
    >
      <p className="h-full grid place-items-center font-bold text-2xl">
        {getLetter()}
      </p>
    </div>
  );
};
