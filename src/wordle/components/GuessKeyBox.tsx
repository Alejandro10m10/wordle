import { useEffect, useRef, useState } from "react";
import { GuessKeyBoxProps } from "../types";

const getLetterOccurrences = (word: string): Record<string, number> => {
  const occurrences: Record<string, number> = {};
  for (const char of word) {
    occurrences[char] = (occurrences[char] || 0) + 1;
  }
  return occurrences;
};

const countLetterOccurrences = (letter: string, word: string) => {
  return [...word].filter((char) => char === letter).length;
};

const getAllIndicesOfLetter = (letter: string, word: string): number[] => {
  const indices: number[] = [];
  let index = word.indexOf(letter);
  while (index !== -1) {
    indices.push(index);
    index = word.indexOf(letter, index + 1);
  }
  return indices;
};

export const GuessKeyBox: React.FC<GuessKeyBoxProps> = ({
  row,
  column,
  onKeyBoxClicked,
  keyBoxSelected,
  wordGuessingArr,
  wordsGuessingArr,
  wordToGuess,
  animationDelay,
  shouldAnimate,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const refParagraph = useRef<HTMLParagraphElement>(null);

  const currentGuessRow = wordsGuessingArr.length;
  const isCurrentGuessRow = currentGuessRow === row;

  const isKeyBoxSelected =
    row === keyBoxSelected.row && column === keyBoxSelected.column;

  const occurrences = getLetterOccurrences(wordToGuess);

  const onGuessKeyBoxClicked = () => {
    ref.current?.focus();
    ref.current?.blur();
    if (!isCurrentGuessRow) return;
    onKeyBoxClicked(row, column);
  };

  const getLetter = (): string | undefined => {
    if (!isCurrentGuessRow) {
      const wordGuessingArrBefore = wordsGuessingArr[row];
      return wordGuessingArrBefore && wordGuessingArrBefore[column];
    }

    if (!wordGuessingArr.length) return "";

    if (isKeyBoxSelected) return wordGuessingArr[keyBoxSelected.column];

    return wordGuessingArr[column];
  };

  const letter = getLetter();

  const getBgColor = () => {
    const key = letter || "";
    if (isCurrentGuessRow || key === "") return "box-none";

    const isCorrectPosition = wordToGuess[column] === key;
    const letterOccurrences = occurrences[key] ?? 0;
    const wordTyped = wordsGuessingArr[row];
    const typedOccurrences = countLetterOccurrences(key, wordTyped);
    const difference = letterOccurrences - typedOccurrences;

    // Devuelve directamente si está en la posición correcta
    if (isCorrectPosition) return "box-correct border-0!";

    // Si la letra aparece solo una vez, y ya fue escrita, pero no está en la posición correcta
    if (letterOccurrences === 1 && difference === 0) {
      return "box-present border-0!";
    }

    // Si hay múltiples ocurrencias y no está en la posición correcta
    if (letterOccurrences > 1) {
      const indices = getAllIndicesOfLetter(key, wordToGuess);

      // Contar cuántas veces se ha escrito la letra correctamente en las posiciones esperadas
      const correctlyPlaced = indices.filter(
        (i) => wordTyped[i] === key
      ).length;

      if (correctlyPlaced === indices.length) {
        return "box-absent border-0!";
      }

      if (difference < 0) {
        return "box-present border-0!";
      }

      return "box-present border-0!";
    }

    // Si simplemente está en otra posición, sin reglas especiales
    if (wordToGuess.includes(key)) {
      return "box-present border-0!";
    }

    return "box-absent border-0!";
  };

  useEffect(() => {
    if (!shouldAnimate || !refParagraph.current) return;

    const el = refParagraph.current;
    el.classList.remove("show-after-delay");
    void el.offsetWidth;
    el.classList.add("show-after-delay");
  }, [shouldAnimate]);

  return (
    <div
      ref={ref}
      onClick={onGuessKeyBoxClicked}
      {...(isKeyBoxSelected ? { tabIndex: 0 } : {})}
      className={` w-10 h-10 select-none rounded-md border-2  ${
        isKeyBoxSelected
          ? "border-box-border focus:border-box-border focus:outline-none"
          : "border-gray-400"
      } ${getBgColor()} ${isCurrentGuessRow && "cursor-pointer"} ${
        currentGuessRow > row && "flip-vertical"
      }`}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <p
        ref={refParagraph}
        className="h-full grid place-items-center font-bold text-2xl show-after-delay"
        style={{ animationDelay: `${animationDelay + 0.15}s` }} // 1s = duration of flip
      >
        {letter}
      </p>
    </div>
  );
};
