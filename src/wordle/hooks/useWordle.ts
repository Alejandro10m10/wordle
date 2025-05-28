import { useEffect, useState } from "react";
import { UseWordleProps } from "../types";
import { BOARD_ROWS } from "../constants";
import { SpecialCharacter } from "../enums";

const replaceLetterAtWordArr = (
  wordArray: string[],
  index: number,
  letter: string
) => {
  const updated = [...wordArray];
  if (letter === "") return updated;
  if (letter === SpecialCharacter.Backspace) letter = "";
  updated[index] = letter;
  return updated;
};

const initialWordGuessingArr = Array.from({ length: BOARD_ROWS }, (_) => "");

export const useWordle = ({ keyTrigger, column }: UseWordleProps) => {
  const [wordToGuess] = useState("HELLO");
  const [wordGuessingArr, setWordGuessingArr] = useState<string[]>(
    initialWordGuessingArr
  );
  const [wordGuessing, setWordGuessing] = useState("");

  useEffect(() => {
    if (!keyTrigger.key) return;
    const newWordGuessingArr = replaceLetterAtWordArr(
      wordGuessingArr,
      column,
      keyTrigger.key
    );
    setWordGuessingArr(newWordGuessingArr);
    setWordGuessing(newWordGuessingArr.join(""));
  }, [keyTrigger.id]);

  return {
    wordToGuess,
    wordGuessingArr,
    wordGuessing,
  };
};
