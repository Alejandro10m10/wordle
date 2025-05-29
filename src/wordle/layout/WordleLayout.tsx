import { useState } from "react";
import { Navbar, Sidebar } from "../components";
import { NavbarProps, SidebarConfig, WordleLayoutProps } from "../types";
import { AlertProvider } from "../context/AlertContext";

export const WordleLayout: React.FC<WordleLayoutProps> = ({ children }) => {
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
    <AlertProvider>
      <Navbar {...navbarConfig} />
      <Sidebar {...sidebarConfig} />
      <main
        className={` h-[calc(100dvh-50px)] transition-all duration-300 ml-0`}
      >
        {children}
      </main>
    </AlertProvider>
  );
};
