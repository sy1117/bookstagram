import React, { useState } from "react";
import { Meta } from "@storybook/react";
import CommentField from "./CommentField";

export default {
  title: "Molecures/CommentField",
  component: CommentField,
} as Meta;

const test = "Lorem ipsum dolor sit amet";

export const Normal = () => {
  return (
    <CommentField
      onSubmit={(event) => {
        event.preventDefault();
        alert("onSubmit");
      }}
    />
  );
};
