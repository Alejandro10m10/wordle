import { SpecialCharacter } from "../enums";
import { KeyBoxSelected } from "../types";

export const BOARD_ROWS: number = 5;
export const BOARD_COLUMNS: number = 6;

export const BOARD_ROWS_ARRAY = Array.from({ length: BOARD_ROWS }, (_, i) => i);
export const BOARD_COLUMNS_ARRAY = Array.from(
  { length: BOARD_COLUMNS },
  (_, i) => i
);

export const INITIAL_KEY_BOX_SELECTED: KeyBoxSelected = {
  row: 0,
  column: 0,
};

export const KEY_BOARD_ARR: string[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  [
    SpecialCharacter.Enter,
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    SpecialCharacter.Backspace,
  ],
];

export const REPLACE_CHART_AT = (
  str: string,
  index: number,
  newChar: string
) => {
  return `${str.slice(0, index)}${newChar}${str.slice(index + 1)}`;
};
