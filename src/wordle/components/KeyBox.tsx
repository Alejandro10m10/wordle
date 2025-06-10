import { memo } from "react";
import { SpecialCharacter } from "../enums";
import { KeyBoxProps } from "../types";
import { isSpecialCharacter } from "../constants";

const EnterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-5 h-6"
    fill="none"
    stroke="#FAFAFA"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const BackspaceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="none"
    stroke="#FAFAFA"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
    <path d="m12 9 6 6" />
    <path d="m18 9-6 6" />
  </svg>
);

const displayKey = (key: string) => {
  switch (key) {
    case SpecialCharacter.Enter:
      return <EnterIcon />;
    case SpecialCharacter.Backspace:
      return <BackspaceIcon />;
    default:
      return <span className="text-white text-lg">{key}</span>;
  }
};

export const KeyBox: React.FC<KeyBoxProps> = memo(
  ({ keyValue, onKeyClicked }) => {
    const paddingClass = isSpecialCharacter(keyValue) ? "px-6.5" : "px-3";

    const onClickKey = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.blur();
      onKeyClicked(keyValue);
    };

    return (
      <button
        onClick={onClickKey}
        className={`${paddingClass} h-14 min-w-12 select-none rounded-md font-bold bg-gray-400 hover:bg-gray-200 cursor-pointer`}
      >
        {displayKey(keyValue)}
      </button>
    );
  }
);
