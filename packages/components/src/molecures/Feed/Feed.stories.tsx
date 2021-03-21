// Button.stories.tsx

import React from "react";

import { Meta } from "@storybook/react";

import { Feed, FeedProps } from "./Feed";

export default {
  title: "Molecures/Feed",
  component: Feed,
} as Meta;

const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae a natus vel officia dignissimos ipsam ratione iste quas quidem?`;

export const Normal = () => (
  <Feed content={content} imageURL={"d"} userId={"testuser"} likes={330}></Feed>
);
