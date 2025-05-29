import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import AlertPopup from "../components/AlertPopup";

interface AlertContextType {
  showAlert: (message: string) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = (): AlertContextType => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error("useAlert must be used inside AlertProvider");
  return ctx;
};

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const isShowing = useRef(false);

  const showAlert = useCallback((msg: string) => {
    if (isShowing.current) return;
    isShowing.current = true;

    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
      isShowing.current = false;
    }, 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {message && <AlertPopup message={message} />}
      {children}
    </AlertContext.Provider>
  );
};
