import { BOARD_COLUMNS_ARRAY, BOARD_ROWS_ARRAY } from "../constants";
import { GuessKeyBox } from "./GuessKeyBox";

export const GuessBoard = () => {
  return (
    <div className="keyboard-guess flex items-center gap-1 flex-col w-full">
      {BOARD_COLUMNS_ARRAY.map((_, rowIndex) => (
        <div key={`keyboard-guess-row-${rowIndex}`} className="flex gap-1">
          {BOARD_ROWS_ARRAY.map((_, columnIndex) => (
            <GuessKeyBox
              key={`keyboard-guess-column-${columnIndex}`}
              row={rowIndex}
              column={columnIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
