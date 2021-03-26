import React from "react";

import { Meta } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "Layouts/Layout",
  component: Layout,
} as Meta;

const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae a natus vel officia dignissimos ipsam ratione iste quas quidem?`;

export const Normal = () => <Layout>test</Layout>;
