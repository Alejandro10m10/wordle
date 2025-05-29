import { useEffect, useState } from "react";
import { UseWordleProps } from "../types";
import { BOARD_ROWS } from "../constants";
import { SpecialCharacter } from "../enums";
import { useAlert } from "../context";

const isBackSpaceKey = (key: string): boolean => {
  return key === SpecialCharacter.Backspace;
};

const isEnterKey = (key: string): boolean => {
  return key === SpecialCharacter.Enter;
};

const isSpecialKey = (key: string): boolean => {
  return isBackSpaceKey(key) || isEnterKey(key);
};

const replaceLetterAtWordArr = (
  wordArray: string[],
  index: number,
  letter: string
) => {
  const updated = [...wordArray];

  const isBackSpace = isBackSpaceKey(letter);
  if (isBackSpace) letter = "";
  updated[isBackSpace ? index - 1 : index] = letter;
  return updated;
};
const initialWordGuessingArr = Array.from({ length: BOARD_ROWS }, (_) => "");

export const useWordle = ({
  keyTrigger,
  row,
  column,
  onKeyBoxClicked,
}: UseWordleProps) => {
  const [wordToGuess] = useState("HELLO");
  const [wordGuessingArr, setWordGuessingArr] = useState<string[]>(
    initialWordGuessingArr
  );
  const [wordGuessing, setWordGuessing] = useState("");
  const { showAlert } = useAlert();

  useEffect(() => {
    onKeyTrigger();
  }, [keyTrigger.id]);

  const onKeyTrigger = () => {
    const key = keyTrigger.key;
    if (!key) return;

    if (isEnterKey(key)) {
      validateGuessWord();
      return;
    }

    const newWordGuessingArr = replaceLetterAtWordArr(
      wordGuessingArr,
      column,
      key
    );
    setWordGuessingArr(newWordGuessingArr);
    setWordGuessing(newWordGuessingArr.join("").trim());

    onKeyBoxClicked(row, getNextBoxToClick());
  };

  const getNextBoxToClick = (): number => {
    if (isBackSpaceKey(keyTrigger.key)) {
      const newCol = column < 1 ? column : column - 1;
      return newCol;
    }

    return column < BOARD_ROWS ? column + 1 : column;
  };

  const validateGuessWord = () => {
    if (wordGuessing.length !== BOARD_ROWS) {
      showAlert("No hay suficientes letras");
      return;
    }
  };

  return {
    wordToGuess,
    wordGuessingArr,
    wordGuessing,
  };
};
