import {
  BOARD_COLUMNS_ARRAY,
  BOARD_ROWS_ARRAY,
  INITIAL_KEY_BOX_SELECTED,
} from "../constants";
import { GuessKeyBox } from "./GuessKeyBox";
import { GuessBoardProps } from "../types";
import { useState } from "react";
import { useWordle } from "../hooks";

export const GuessBoard: React.FC<GuessBoardProps> = ({ keyTrigger }) => {
  const [keyBoxSelected, setKeyBoxSelected] = useState(
    INITIAL_KEY_BOX_SELECTED
  );

  const onKeyBoxClicked = (row: number, column: number) => {
    setKeyBoxSelected({ row, column });
  };

  const { wordGuessingArr, wordsGuessingArr, wordToGuess } = useWordle({
    keyTrigger,
    row: keyBoxSelected.row,
    column: keyBoxSelected.column,
    onKeyBoxClicked,
  });

  return (
    <div className="keyboard-guess flex items-center gap-1 flex-col w-full mt-1.5">
      {BOARD_COLUMNS_ARRAY.map((_, rowIndex) => (
        <div key={`keyboard-guess-row-${rowIndex}`} className="flex gap-1">
          {BOARD_ROWS_ARRAY.map((_, columnIndex) => {
            const delay = columnIndex * 0.2;
            return (
              <GuessKeyBox
                key={`keyboard-guess-column-${columnIndex}`}
                row={rowIndex}
                column={columnIndex}
                wordGuessingArr={wordGuessingArr}
                wordsGuessingArr={wordsGuessingArr}
                onKeyBoxClicked={onKeyBoxClicked}
                keyBoxSelected={keyBoxSelected}
                wordToGuess={wordToGuess}
                animationDelay={delay}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
