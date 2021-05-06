import clsx from "clsx";
import React from "react";
import styles from "./ProfileImage.module.scss";

export interface ProfileImageProps {
  url: string;
  size?: "small" | "medium";
}
const ProfileImage: React.FC<ProfileImageProps> = ({
  url,
  size = "medium",
}) => {
  return (
    <div className={clsx(styles.profile_img, styles[size])}>
      <img src={url} alt="프로필 이미지" />
    </div>
  );
};

export default ProfileImage;
