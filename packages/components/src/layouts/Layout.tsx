import React from "react";
import Header, { HeaderProps } from "../organisms/Header/Header";

type MenuType = "home" | "direct" | "explore" | "heart" | "profile" | "logout";

export interface LayoutProps extends HeaderProps {
  onMenuClick: (MenuType) => void;
  profileImageURL: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  onMenuClick,
  profileImageURL,
}) => {
  return (
    <>
      <Header onMenuClick={onMenuClick} profileImageURL={profileImageURL} />
      <main style={{ paddingTop: "34px", backgroundColor: "#fafafa" }}>
        {children}
      </main>
    </>
  );
};
export default Layout;
