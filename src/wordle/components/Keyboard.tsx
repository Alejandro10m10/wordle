import { useEffect } from "react";
import { KEY_BOARD_ARR } from "../constants";
import { KeyBoardProps } from "../types";
import { KeyBox } from "./";
import { SpecialCharacter } from "../enums";

export const Keyboard: React.FC<KeyBoardProps> = ({ onKeyClicked }) => {
  const onHandleKeyClicked = (keyClicked: string) => {
    onKeyClicked(keyClicked);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;
      const isLetter = /^[a-zA-Z]$/.test(key);
      const allowedKeys = [
        SpecialCharacter.Backspace.toString(),
        SpecialCharacter.Enter.toString(),
      ];

      if (!isLetter && !allowedKeys.includes(key)) {
        e.preventDefault();
        return;
      }

      onHandleKeyClicked(isLetter ? key.toUpperCase() : key);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard flex items-center gap-1 flex-col w-full">
      {KEY_BOARD_ARR.map((keyBoardRow, rowIndex) => (
        <div key={`keyboard-row-${rowIndex}`} className="flex gap-1">
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
