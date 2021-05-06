import React from "react";
import { Meta } from "@storybook/react";
import Layout from "./Layout";
import * as Icons from "../atoms/Icon/Icon";
const { IconHome, IconActivity, IconExplore, IconDirect } = Icons;

export default {
  title: "Layouts/Layout",
  component: Layout,
} as Meta;

const menus = [
  { path: "/", icon: <IconHome /> },
  { path: "/new-post", icon: <IconDirect /> },
  { path: "/friends", icon: <IconExplore /> },
  { path: "/notifications", icon: <IconActivity /> },
];
const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae a natus vel officia dignissimos ipsam ratione iste quas quidem?`;

// export const Normal = () => (
//   <Layout
//     menus={menus}
//     logoutURL={"/log-out"}
//     profileImageURL={"/srer.ts"}
//   ></Layout>
// );
