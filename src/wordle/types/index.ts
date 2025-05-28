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

export type GuessKeyBoxProps = {
  row: number;
  column: number;
};

export interface KeyBoxProps {
  keyValue: string;
}
