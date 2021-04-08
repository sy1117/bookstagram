import React from "react";
import Header from "../organisms/Header/Header";

export interface LayoutProps {
  menus: Array<{ path: string; icon: any }>;
  profileImageURL: string;
  logoutURL: string;
}

const Layout: React.FC<LayoutProps> = ({ children, menus }) => {
  return (
    <>
      <Header menus={menus} />
      <main style={{ paddingTop: "34px", backgroundColor: "#fafafa" }}>
        {children}
      </main>
    </>
  );
};
export default Layout;
