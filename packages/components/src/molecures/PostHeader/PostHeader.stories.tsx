import React from "react";

import { Meta } from "@storybook/react";
import PostHeader from "./PostHeader";

export default {
  title: "Molecures/PostHeader",
  component: PostHeader,
} as Meta;

export const Normal = () => (
  <PostHeader
    profileImageURL={"tesst"}
    userName={"userName"}
    postTitle={"postTitle"}
  >
    test
  </PostHeader>
);
