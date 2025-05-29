import React from "react";
import { AlertPopupProps } from "../types";

const AlertPopup: React.FC<AlertPopupProps> = ({ message, onClose }) => {
  return (
    <div className="h-18 absolute top-13 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 border-1 border-gray-900 rounded-md min-w-96 grid place-self-center place-items-center bg-white dark:bg-dark">
      <button
        onClick={onClose}
        className="cursor-pointer absolute top-3.5 right-3.5"
      >
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
          className="lucide lucide-x h-4 w-4"
        >
          <path
            d="M18 6 6 18"
            strokeOpacity="0.5"
            stroke="#FAFAFA"
            fill="none"
            strokeWidth="2px"
          ></path>
          <path
            d="m6 6 12 12"
            strokeOpacity="0.5"
            stroke="#FAFAFA"
            fill="none"
            strokeWidth="2px"
          ></path>
        </svg>
      </button>
      <p className="select-none">{message}</p>
    </div>
  );
};

export default React.memo(AlertPopup);
