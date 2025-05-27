import { useTheme } from "../../theme";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <ul className="flex items-center justify-center gap-1">
        <li>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 mt-4 border rounded text-sm"
          >
            Switch to {theme ? "Light" : "Dark"} Mode
          </button>
        </li>
        <li>
          <button className="h-10 w-10 grid place-items-center cursor-pointer">
            {/* Icon: layout-sidebar-right-collapse */}
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
              className="lucide lucide-panel-right-close h-5 w-5 text-neutral-500 duration-300 ease-in-out rotate-0"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="2"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></rect>
              <path
                d="M15 3v18"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></path>
              <path
                d="m8 9 3 3-3 3"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></path>
            </svg>
          </button>
        </li>
        <li>
          <button className="h-10 w-10 grid place-items-center cursor-pointer">
            {/* Icon: user */}
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
              className="lucide lucide-user h-5 w-5 text-neutral-500"
            >
              <path
                d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></path>
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></circle>
            </svg>
          </button>
        </li>
        <li>
          <h1 className="uppercase font-bold">La palabra del día</h1>
        </li>
        <li>
          <button className="h-10 w-10 grid place-items-center cursor-pointer">
            {/* Icon: trending-up */}
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
              className="lucide lucide-trending-up h-5 w-5 text-neutral-500"
            >
              <polyline
                points="22 7 13.5 15.5 8.5 10.5 2 17"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></polyline>
              <polyline
                points="16 7 22 7 22 13"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></polyline>
            </svg>
          </button>
        </li>
        <li>
          <button className="h-10 w-10 grid place-items-center cursor-pointer">
            {/* Icon: adjustments-horizontal */}
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
              className="lucide lucide-settings2 h-5 w-5 text-neutral-500"
            >
              <path
                d="M20 7h-9"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></path>
              <path
                d="M14 17H5"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></path>
              <circle
                cx="17"
                cy="17"
                r="3"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></circle>
              <circle
                cx="7"
                cy="7"
                r="3"
                stroke="#737373"
                fill="none"
                strokeWidth="2px"
              ></circle>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};
