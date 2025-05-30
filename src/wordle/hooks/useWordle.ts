import { useEffect, useState } from "react";
import { UseWordleProps } from "../types";
import { BOARD_COLUMNS, BOARD_ROWS } from "../constants";
import { SpecialCharacter } from "../enums";
import { useAlert } from "../context";

const initialWordGuessingArr = Array.from({ length: BOARD_ROWS }, (_) => "");

const isBackSpaceKey = (key: string): boolean => {
  return key === SpecialCharacter.Backspace;
};

const isEnterKey = (key: string): boolean => {
  return key === SpecialCharacter.Enter;
};

const replaceLetterAtWordArr = (
  wordStr: string,
  wordArray: string[],
  index: number,
  letter: string
) => {
  const updated = [...wordArray];

  const isBackSpace = isBackSpaceKey(letter);

  if (!isBackSpace && wordStr.length >= BOARD_ROWS) return updated;

  if (isBackSpace) letter = "";
  if (isBackSpace && !wordStr.length) return updated;

  const letterToUpdate = updated[index] ?? "";

  if (letterToUpdate === "" && isBackSpace) {
    updated[index - 1] = letter;
  }

  updated[index] = letter;
  return updated;
};

export const useWordle = ({
  keyTrigger,
  row,
  column,
  onKeyBoxClicked,
}: UseWordleProps) => {
  const [wordToGuess] = useState("PLATA");
  const [wordGuessingArr, setWordGuessingArr] = useState<string[]>(
    initialWordGuessingArr
  );
  const [wordGuessing, setWordGuessing] = useState("");
  const [wordsGuessingArr, setWordsGuessingArr] = useState<string[]>([]);
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
      wordGuessing,
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

    if (wordsGuessingArr.length >= BOARD_COLUMNS) return;

    setWordsGuessingArr([...wordsGuessingArr, wordGuessing]);
    setWordGuessingArr([]);
    setWordGuessing("");
  };

  useEffect(() => {
    onKeyBoxClicked(wordsGuessingArr.length, 0);
  }, [wordsGuessingArr]);

  return {
    wordToGuess,
    wordGuessingArr,
    wordGuessing,
    wordsGuessingArr,
  };
};
