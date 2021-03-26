import React from "react";
import {
  IconActivity,
  IconDirect,
  IconExplore,
  IconHome,
} from "../atoms/Icon/Icon";
import Header from "../organisms/Header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header
        menus={[
          { path: "/", icon: <IconHome /> },
          { path: "/new-post", icon: <IconDirect /> },
          { path: "/friends", icon: <IconExplore /> },
          { path: "/notifications", icon: <IconActivity /> },
          {
            path: "/profile",
            icon: (
              <span>
                <img
                  width={22}
                  height={22}
                  style={{ width: "22px", height: "22px", borderRadius: "50%" }}
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18299059_1885697375019522_327755955154452480_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1j-0cJUKF_QAX_T1e2a&tp=1&oh=83f9b70f71c780e50125b25109267daf&oe=605F92AB"
                />
              </span>
            ),
            dropdownMenu: [{ path: "/logout", name: "로그아웃" }],
          },
        ]}
      />
      <div id="main_container" style={{ marginTop: "34px" }}>
        {children}
      </div>
    </>
  );
};
export default Layout;
