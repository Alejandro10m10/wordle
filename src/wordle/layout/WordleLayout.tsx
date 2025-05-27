import { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { NavbarProps, SidebarConfig } from "../types";

export const WordleLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const onCollapseSideBar = (): void => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarConfig: SidebarConfig = {
    isSidebarCollapsed,
    onCollapseSideBar,
  };

  const navbarConfig: NavbarProps = {
    sidebarConfig,
  };

  return (
    <>
      <Navbar {...navbarConfig} />
      <Sidebar {...sidebarConfig} />
    </>
  );
};
