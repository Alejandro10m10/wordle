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
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used inside AlertProvider");
  return context;
};

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null);
  const isShowing = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const clearCurrentAlert = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setMessage(null);
    isShowing.current = false;
  };

  const showAlert = useCallback((msg: string) => {
    if (isShowing.current) return;

    isShowing.current = true;
    setMessage(msg);

    timeoutRef.current = window.setTimeout(() => {
      clearCurrentAlert();
    }, 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {message && <AlertPopup message={message} onClose={clearCurrentAlert} />}
      {children}
    </AlertContext.Provider>
  );
};
