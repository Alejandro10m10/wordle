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

export interface KeyBoxProps {
  keyValue: string;
}
