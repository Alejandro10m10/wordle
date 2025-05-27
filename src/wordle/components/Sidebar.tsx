export const Sidebar = () => {
  return (
    <div className="w-64 absolute top-0 border-r border-gray-900">
      <section className="p-2">
        <button className="grid grid-cols-[32px_1fr_16px] gap-2 p-2 items-center w-full">
          <img
            className="w-8 h-8 rounded-lg"
            src={"/src/assets/imgs/appIcon.png"}
            alt="Logo aplicación"
          />
          <h2 className="text-xs font-bold justify-self-start">
            La Palabra del Día
          </h2>
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
            className="lucide lucide-chevron-down ml-auto size-4"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="#F4F4F5"
              fill="none"
              strokeWidth="2px"
            ></path>
          </svg>
        </button>
      </section>
      <section className="h-[calc(100dvh-64px)] overflow-y-scroll">
        <nav className="p-2">
          <h3 className="text-xs text-gray-500 p-2">Modos de juego</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-grid2x2 size-4"
                >
                  <rect
                    width="18"
                    height="18"
                    x="3"
                    y="3"
                    rx="2"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></rect>
                  <path
                    d="M3 12h18"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M12 3v18"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Normal</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-wrap-text size-4"
                >
                  <line
                    x1="3"
                    x2="21"
                    y1="6"
                    y2="6"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></line>
                  <path
                    d="M3 12h15a3 3 0 1 1 0 6h-4"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <polyline
                    points="16 16 14 18 16 20"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></polyline>
                  <line
                    x1="3"
                    x2="10"
                    y1="18"
                    y2="18"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></line>
                </svg>
                <span className="text-sm">Frase</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-spell-check size-4"
                >
                  <path
                    d="m6 16 6-12 6 12"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M8 12h8"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="m16 20 2 2 4-4"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Tildes</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-atom size-4"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></circle>
                  <path
                    d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Cientifica</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-timer size-4"
                >
                  <line
                    x1="10"
                    x2="14"
                    y1="2"
                    y2="2"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></line>
                  <line
                    x1="12"
                    x2="15"
                    y1="14"
                    y2="11"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></line>
                  <circle
                    cx="12"
                    cy="14"
                    r="8"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></circle>
                </svg>
                <span className="text-sm">Contrarreloj</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-circle-plus size-4"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></circle>
                  <path
                    d="M8 12h8"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M12 8v8"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Crear</span>
              </button>
            </li>
          </ul>
        </nav>
        <nav className="p-2">
          <h3 className="text-xs text-gray-500 p-2">Archivo</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-grid2x2 size-4"
                >
                  <rect
                    width="18"
                    height="18"
                    x="3"
                    y="3"
                    rx="2"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></rect>
                  <path
                    d="M3 12h18"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M12 3v18"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Archivo Normal</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-spell-check size-4"
                >
                  <path
                    d="m6 16 6-12 6 12"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M8 12h8"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="m16 20 2 2 4-4"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Archivo Tildes</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-atom size-4"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="1"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></circle>
                  <path
                    d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <path
                    d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                </svg>
                <span className="text-sm">Archivo Cientifica</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2">
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
                  className="lucide lucide-wrap-text size-4"
                >
                  <line
                    x1="3"
                    x2="21"
                    y1="6"
                    y2="6"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></line>
                  <path
                    d="M3 12h15a3 3 0 1 1 0 6h-4"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></path>
                  <polyline
                    points="16 16 14 18 16 20"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></polyline>
                  <line
                    x1="3"
                    x2="10"
                    y1="18"
                    y2="18"
                    stroke="#F4F4F5"
                    fill="none"
                    strokeWidth="2px"
                  ></line>
                </svg>
                <span className="text-sm">Archivo Frase</span>
              </button>
            </li>
          </ul>
        </nav>
        <nav className="p-2">
          <h3 className="text-xs text-gray-500 p-2">Archivo</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2"
              >
                <span className="text-sm">Como jugar</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2"
              >
                <span className="text-sm">Como jugar - Frase</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2"
              >
                <span className="text-sm">Blog</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2"
              >
                <span className="text-sm">Estadísticas</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 w-full hover:bg-gray-900 rounded cursor-pointer py-1.5 px-2"
              >
                <span className="text-sm">Contacto</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};
