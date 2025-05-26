import { Route, Routes } from "react-router";
import { WordleRoutes } from "../wordle/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<WordleRoutes />} />
    </Routes>
  );
};
