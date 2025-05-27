export type NavbarProps = {
  sidebarConfig: SidebarConfig;
};

export type SidebarConfig = {
  onCollapseSideBar: () => void;
  isSidebarCollapsed: boolean;
};
