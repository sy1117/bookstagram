import React from "react";
import { Meta } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
} as Meta;

const Template = (args) => <Header {...args} />;
export const Normal = Template.bind({});
Normal.args = {
  onMenuClick: (key) => {
    console.log("key", key);
  },
};
