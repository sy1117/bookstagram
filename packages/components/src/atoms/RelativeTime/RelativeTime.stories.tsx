// Button.stories.tsx

import React from "react";
import { Meta } from "@storybook/react";
import RelativeTime from "./RelativeTime";

export default {
  title: "Atoms/RelativeTime",
  component: RelativeTime,
} as Meta;

const Template = (args) => <RelativeTime {...args} />;

export const Normal = () => Template.bind({});
Normal.args = {
  datetime: Date.now().toLocaleString(),
};
