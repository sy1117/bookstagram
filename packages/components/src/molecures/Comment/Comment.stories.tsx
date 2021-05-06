import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Comment from "./Comment";

export default {
  title: "Molecures/Comment",
  component: Comment,
} as Meta;

const test = "Lorem ipsum dolor sit amet";

export const Normal = () => {
  // const [{ show, hide }] = useModal(false);
  return (
    <Comment
      profileImageURL={""}
      content={"comment content"}
      createdAt={"2021-12-31 12:30:12"}
      userName={"userName"}
    />
  );
};
