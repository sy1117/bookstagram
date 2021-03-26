// Button.stories.tsx

import React from "react";
import { Meta } from "@storybook/react";
import Header from "./Header";
import {
  IconActivity,
  IconDirect,
  IconExplore,
  IconHome,
} from "../../atoms/Icon/Icon";

export default {
  title: "Organisms/Header",
  component: Header,
} as Meta;

export const Normal = () => (
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
);
