import React from "react";
//@ts-ignore
import styles from "./ProfileImage.module.scss";

export interface ProfileImageProps {
  url: string;
}
const ProfileImage: React.FC<ProfileImageProps> = ({ url }) => {
  return (
    <div className={styles.profile_img}>
      <img src={url} alt="프로필 이미지" />
    </div>
  );
};

export default ProfileImage;
