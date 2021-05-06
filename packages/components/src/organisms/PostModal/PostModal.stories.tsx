// Button.stories.tsx

import React, { useState } from "react";
import { Meta } from "@storybook/react";
import PostModal from "./PostModal";

export default {
  title: "Organisms/PostModal",
  component: PostModal,
} as Meta;

export const Normal = () => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <button onClick={() => setvisible(true)}>open</button>
      <PostModal
        userName={"username"}
        bookName={"herw"}
        content={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, hic?"
        }
        mainImageURL={"test.jpg"}
        profileImageURL={"test.jpg"}
        comments={[]}
        visible={visible}
        onClose={() => setvisible(false)}
        onComment={() => {}}
      />
    </>
  );
};
