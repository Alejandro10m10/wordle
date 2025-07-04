export type NavbarProps = {
  sidebarConfig: SidebarConfig;
};

export type SidebarConfig = {
  onCollapseSideBar: () => void;
  isSidebarCollapsed: boolean;
};

export type WordleLayoutProps = {
  children: React.ReactNode;
};

export interface GuessKeyBoxProps extends KeyBoxSelected {
  wordGuessingArr: string[];
  wordsGuessingArr: string[];
  wordToGuess: string;
  onKeyBoxClicked: (row: number, column: number) => void;
  keyBoxSelected: KeyBoxSelected;
  animationDelay: number;
  animatedRow: number;
}

interface OnKeyClickedProps {
  onKeyClicked: (keyClicked: string) => void;
}

export interface KeyBoxProps extends OnKeyClickedProps {
  keyValue: string;
}

export interface KeyBoardProps extends OnKeyClickedProps {}

interface OnKeyClickedProps {
  onKeyClicked: (keyClicked: string) => void;
}

export interface GuessBoardProps {
  keyTrigger: KeyTrigger;
}

export interface KeyBoxSelected {
  row: number;
  column: number;
}

export interface UseWordleProps extends GuessBoardProps, KeyBoxSelected {
  onKeyBoxClicked: (row: number, column: number) => void;
}

export interface KeyTrigger {
  key: string;
  id: number;
}

export interface AlertPopupProps {
  message: string;
  onClose: () => void;
}

export interface AlertContextType {
  showAlert: (message: string) => void;
}
