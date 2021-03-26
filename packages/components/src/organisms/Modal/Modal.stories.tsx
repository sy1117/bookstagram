// Button.stories.tsx

import React, { useState } from "react";
import { Meta } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Organisms/Modal",
  component: Modal,
} as Meta;

export const Normal = () => {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <button onClick={() => setvisible(true)}>open</button>
      <Modal visible={visible} onClose={() => setvisible(false)} />
    </>
  );
};
