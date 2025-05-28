import { useEffect, useState } from "react";
import { UseWordleProps } from "../types";
import { BOARD_COLUMNS, BOARD_COLUMNS_ARRAY, BOARD_ROWS } from "../constants";
import { SpecialCharacter } from "../enums";

const replaceLetterAtWordArr = (
  wordArray: string[],
  index: number,
  letter: string
) => {
  if (letter === "") return wordArray;
  if (letter === SpecialCharacter.Backspace) letter = "";
  wordArray[index] = letter;
  return wordArray;
};

const initialWordGuessingArr = Array.from({ length: BOARD_ROWS }, (_) => "");

export const useWordle = ({ lastKeySelected, column }: UseWordleProps) => {
  const [wordToGuess, setWordToGuess] = useState("HELLO");

  const [wordGuessingArr, setWordGuessingArr] = useState<string[]>(
    initialWordGuessingArr
  );
  const [wordGuessing, setWordGuessing] = useState("");

  useEffect(() => {
    setWordGuessingArr(
      replaceLetterAtWordArr(wordGuessingArr, column, lastKeySelected)
    );

    setWordGuessing(wordGuessingArr.join(""));
  }, [lastKeySelected]);

  return {
    wordToGuess,
    wordGuessingArr,
    wordGuessing,
  };
};
