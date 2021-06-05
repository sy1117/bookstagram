import clsx from "clsx";
import React from "react";
import Profileimage from "../../atoms/ProfileImage/ProfileImage";
import styles from "./PostHeader.module.scss";

export interface PostHeaderProps {
  profileImageURL: string;
  userName: string;
  postTitle: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  profileImageURL,
  userName,
  postTitle,
}) => {
  return (
    <header className={styles.top}>
      <div className={styles.user_container}>
        <Profileimage url={profileImageURL} />
        <div>
          <div className={styles.m_text}>{userName}</div>
          <div className={styles.s_text}>{postTitle}</div>
        </div>
      </div>
      {/* <div className={styles.sprite_more_icon} data-name="more">
        <ul className={styles.toggle_box}>
          <li>
            <input
              type="submit"
              className={styles.follow}
              value="팔로우"
              name="follow"
            />
          </li>
          <li>수정</li>
          <li>삭제</li>
        </ul>
      </div> */}
    </header>
  );
};

export default PostHeader;
