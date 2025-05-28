import { GuessBoard, Keyboard } from "../components";

export const NormalView = () => {
  return (
    <div className="grid gap-4">
      <GuessBoard />
      <Keyboard />
    </div>
  );
};
