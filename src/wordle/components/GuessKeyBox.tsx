import { GuessKeyBoxProps } from "../types";

export const GuessKeyBox: React.FC<GuessKeyBoxProps> = ({ row, column }) => {
  const isFirstRow = row === 0;
  return (
    <div
      {...(isFirstRow ? { tabIndex: 0 } : {})}
      className={`w-10.5 h-10.5 rounded-md border-2 border-gray-400 ${
        isFirstRow ? "focus:border-white cursor-pointer" : ""
      } `}
    ></div>
  );
};
