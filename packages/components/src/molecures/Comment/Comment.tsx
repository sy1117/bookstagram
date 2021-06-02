import React from "react";
import ProfileImage from "../../atoms/ProfileImage/ProfileImage";
import RelativeTime from "../../atoms/RelativeTime/RelativeTime";
import styles from "./Comment.module.scss";

export interface CommentProps {
  profileImageURL?: string;
  content: string;
  userName: string;
  createdAt?: string;
}

const Comment: React.FC<CommentProps> = ({
  profileImageURL,
  content,
  userName,
  createdAt,
}) => (
  <div className={styles.root}>
    {profileImageURL && <ProfileImage url={profileImageURL} />}
    <div>
      {/* <ProfileImage url={profileImageURL} /> */}
      <span className={styles.user_id}>{userName}</span>&nbsp;
      <span>{content}</span>
      <div>
        {createdAt && <RelativeTime datetime={createdAt}></RelativeTime>}
        {/* <span className="try_comment">답글 달기</span> */}
      </div>
      {/* <div className={styles.icon_wrap}>
        <div className={styles.more_trigger}>
          <div className={styles.sprite_more_icon}></div>
        </div>
        <div>
          <div className={styles.sprite_small_heart_icon_outline}></div>
        </div>
      </div> */}
    </div>
  </div>
);

export default Comment;
