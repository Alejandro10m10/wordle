import { useEffect, useMemo, useRef, useState } from "react";
import { GuessKeyBoxProps } from "../types";

const getLetterOccurrences = (word: string): Record<string, number> => {
  return [...word].reduce<Record<string, number>>((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
};

const countLetterOccurrences = (letter: string, word: string) =>
  [...word].filter((char) => char === letter).length;

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
  animatedRow,
}) => {
  const [showColor, setShowColor] = useState(false);

  const boxRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const currentGuessRow = wordsGuessingArr.length;
  const isCurrentGuessRow = currentGuessRow === row;

  const isKeyBoxSelected =
    row === keyBoxSelected.row && column === keyBoxSelected.column;

  const occurrences = useMemo(
    () => getLetterOccurrences(wordToGuess),
    [wordToGuess]
  );

  const onGuessKeyBoxClicked = () => {
    boxRef.current?.focus();
    boxRef.current?.blur();
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

  const getBgColor = useMemo(() => {
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
  }, [
    letter,
    isCurrentGuessRow,
    wordToGuess,
    column,
    wordsGuessingArr,
    row,
    occurrences,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setShowColor(true), 1000 * animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  useEffect(() => {
    if (!showColor || animatedRow !== row || !paragraphRef.current) return;

    const el = paragraphRef.current;
    const classes = getBgColor.split(" ");
    el.classList.remove("show-after-delay");
    boxRef.current?.classList.remove(...classes);
    void el.offsetWidth;
    el.classList.add("show-after-delay");

    setTimeout(() => {
      boxRef.current?.classList.add(...classes);
    }, 1200 * animationDelay);
  }, [animatedRow, row, animationDelay, getBgColor]);

  const boxClass = [
    "w-10 h-10 select-none rounded-md border-2 box",
    isKeyBoxSelected
      ? "border-box-border focus:border-box-border focus:outline-none"
      : "border-gray-400",
    showColor ? getBgColor : "box-none",
    isCurrentGuessRow && "cursor-pointer",
    currentGuessRow > row && "flip-vertical",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={boxRef}
      role="guessBox"
      onClick={onGuessKeyBoxClicked}
      tabIndex={isKeyBoxSelected ? 0 : undefined}
      className={boxClass}
      style={{
        animationDelay: `${animationDelay}s`,
        transitionDelay: `${animationDelay}s`,
        transition: "background-color 0.4s ease-in-out",
      }}
    >
      <p
        ref={paragraphRef}
        className="h-full grid place-items-center font-bold text-2xl show-after-delay"
        style={{ animationDelay: `${animationDelay + 0.15}s` }}
      >
        {letter}
      </p>
    </div>
  );
};
