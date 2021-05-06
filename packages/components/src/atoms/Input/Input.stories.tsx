// Button.stories.tsx

import React from "react";
import { Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta;

export const InputTypeText = () => <Input />;

export const InputTypeSearch = () => <Input type="search" />;
