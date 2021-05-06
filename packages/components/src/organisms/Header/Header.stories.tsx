import React from "react";
import { Meta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
} as Meta;

export const Normal = () => (
  <Header
    onMenuClick={(key) => {
      console.log("key", key);
    }}
  />
);
