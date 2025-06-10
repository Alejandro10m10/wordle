import { useCallback, useEffect } from "react";
import { KEY_BOARD_ARR } from "../constants";
import { KeyBoardProps } from "../types";
import { KeyBox } from "./";
import { SpecialCharacter } from "../enums";

const allowedKeys = new Set([
  SpecialCharacter.Backspace,
  SpecialCharacter.Enter,
]);

export const Keyboard: React.FC<KeyBoardProps> = ({ onKeyClicked }) => {
  const onHandleKeyClicked = useCallback(
    (keyClicked: string) => {
      onKeyClicked(keyClicked);
    },
    [onKeyClicked]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const isLetter = /^[a-zA-Z]$/.test(key);

      if (!isLetter && !allowedKeys.has(key as SpecialCharacter)) {
        e.preventDefault();
        return;
      }

      onHandleKeyClicked(isLetter ? key.toUpperCase() : key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onHandleKeyClicked]);

  return (
    <div className="keyboard flex items-center gap-1 flex-col w-full">
      {KEY_BOARD_ARR.map((keyBoardRow, rowIndex) => (
        <div
          key={`keyboard-row-${rowIndex}`}
          className="flex gap-1"
          role="row-group"
        >
          {keyBoardRow.map((key) => (
            <KeyBox
              key={key}
              keyValue={key}
              onKeyClicked={onHandleKeyClicked}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
