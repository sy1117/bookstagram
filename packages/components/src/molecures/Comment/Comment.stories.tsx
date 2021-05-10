import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import Comment, { CommentProps } from "./Comment";

export default {
  title: "Molecures/Comment",
  component: Comment,
  createdAt: { control: "datetime" },
} as Meta;

const test = "Lorem ipsum dolor sit amet";

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  profileImageURL:
    "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/18299059_1885697375019522_327755955154452480_a.jpg",
  content: "comment content",
  createdAt: "2021-12-31 12:30:12",
  userName: "userName",
};
