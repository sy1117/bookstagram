import React from "react";

import { Meta } from "@storybook/react";
import Popover from "./Popover";

export default {
  title: "Molecures/Popover",
  component: Popover,
} as Meta;

const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae a natus vel officia dignissimos ipsam ratione iste quas quidem?`;

export const Normal = () => <Popover>test</Popover>;
export const PopoverWithInput = () => (
  <Popover>
    <div></div>
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="text" />
  </Popover>
);
