import { useState } from "react";
import { GuessBoard, Keyboard } from "../components";
import { KeyTrigger } from "../types";

const initialKeyTriggerState: KeyTrigger = {
  key: "",
  id: 0,
};

export const NormalView = () => {
  const [keyTrigger, setKeyTrigger] = useState(initialKeyTriggerState);

  const onKeyClicked = (key: string) => {
    setKeyTrigger({ key, id: Date.now() });
  };

  return (
    <div className="grid gap-2.5">
      <GuessBoard keyTrigger={keyTrigger} />
      <Keyboard onKeyClicked={onKeyClicked} />
    </div>
  );
};
