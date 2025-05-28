import { KEY_BOARD_ARR } from "../constants";
import { KeyBoardProps } from "../types";
import { KeyBox } from "./";

export const Keyboard: React.FC<KeyBoardProps> = ({ onKeyClicked }) => {
  const onHandleKeyClicked = (keyClicked: string) => {
    onKeyClicked(keyClicked);
  };

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
