import React from "react";
import Header, { HeaderProps } from "../organisms/Header/Header";

export interface LayoutProps extends HeaderProps {
  profileImageURL: string;
  logoutURL: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const onMenuClick = (
    menuKey: "home" | "direct" | "explore" | "heart" | "profile",
  ) => {
    alert(menuKey);
  };
  return (
    <>
      <Header onMenuClick={onMenuClick} />
      <main style={{ paddingTop: "34px", backgroundColor: "#fafafa" }}>
        {children}
      </main>
    </>
  );
};
export default Layout;
