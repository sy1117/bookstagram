// Button.stories.tsx

import React from "react";
import { Meta } from "@storybook/react";
import ProfileImage from "./ProfileImage";

export default {
  title: "Atoms/ProfileImage",
  component: ProfileImage,
} as Meta;

export const Normal = () => <ProfileImage url="test.jpg" />;

export const ProfileImageSizeSmall = () => (
  <ProfileImage url="test.jpg" size="small" />
);
