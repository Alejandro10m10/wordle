import { SpecialCharacter } from "../enums";
import { KeyBoxProps } from "../types";

const displayKey = (key: string) => {
  if (key === SpecialCharacter.Enter) {
    return (
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check"
        style={{ width: "20px", height: "30px" }}
      >
        <path
          d="M20 6 9 17l-5-5"
          stroke="#FAFAFA"
          fill="none"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (key === SpecialCharacter.Backspace) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-delete"
      >
        <path
          d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
          stroke="#FAFAFA"
          fill="none"
          strokeWidth="2px"
        ></path>
        <path
          d="m12 9 6 6"
          stroke="#FAFAFA"
          fill="none"
          strokeWidth="2px"
        ></path>
        <path
          d="m18 9-6 6"
          stroke="#FAFAFA"
          fill="none"
          strokeWidth="2px"
        ></path>
      </svg>
    );
  }

  return <p>{key}</p>;
};

export const KeyBox: React.FC<KeyBoxProps> = ({ keyValue }) => {
  let isSpecialCharacter =
    keyValue === SpecialCharacter.Enter ||
    keyValue === SpecialCharacter.Backspace;

  const onClickKey = () => {
    console.log(keyValue);
  };

  return (
    <button
      onClick={onClickKey}
      className={`${
        isSpecialCharacter ? "px-6.5" : "px-3"
      } h-14 min-w-12 select-none rounded-md font-bold bg-gray-400 hover:bg-gray-200 cursor-pointer`}
    >
      {displayKey(keyValue)}
    </button>
  );
};
