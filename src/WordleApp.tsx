import { AppRouter } from "./router/AppRouter";

export const WordleApp = () => {
  return (
    <div className="h-dvh bg-white dark:bg-dark text-black dark:text-white">
      <AppRouter />
    </div>
  );
};
