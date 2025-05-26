import { Navigate, Route, Routes } from "react-router";
import { WordlePage } from "../pages";

export const WordleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WordlePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
