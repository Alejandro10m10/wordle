import { useState } from "react";
import { GuessBoard, Keyboard } from "../components";

export const NormalView = () => {
  const [lastKeySelected, setLastKeySelected] = useState("");

  const onKeyClicked = (keyClicked: string) => {
    setLastKeySelected(keyClicked);
  };

  return (
    <div className="grid gap-2.5">
      <GuessBoard lastKeySelected={lastKeySelected} />
      <Keyboard onKeyClicked={onKeyClicked} />
    </div>
  );
};
