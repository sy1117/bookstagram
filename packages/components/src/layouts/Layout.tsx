import React from "react";
import Header from "../organisms/Header/Header";

export interface LayoutProps {
  menus: Array<{ path: string; icon: any }>;
  profileImageURL: string;
  logoutURL: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  menus,
  profileImageURL,
  logoutURL,
}) => {
  console.log(menus);
  return (
    <>
      <Header
        menus={[
          ...menus,
          // // { path: "/", icon: <IconHome /> },
          // // { path: "/new-post", icon: <IconDirect /> },
          // // { path: "/friends", icon: <IconExplore /> },
          // // { path: "/notifications", icon: <IconActivity /> },
          // {
          //   path: "/profile",
          //   icon: (
          //     <span>
          //       <img
          //         width={22}
          //         height={22}
          //         style={{ width: "22px", height: "22px", borderRadius: "50%" }}
          //         src={profileImageURL}
          //       />
          //     </span>
          //   ),
          //   dropdownMenu: [{ path: logoutURL, name: "로그아웃" }],
          // },
        ]}
      />
      <div
        id="main_container"
        style={{ marginTop: "34px", backgroundColor: "#fafafa" }}
      >
        {children}
      </div>
    </>
  );
};
export default Layout;
