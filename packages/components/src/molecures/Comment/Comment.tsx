import React from "react";
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
  <div className={styles.user_detail}>
    {profileImageURL && (
      <div className={styles.user}>
        <img src={profileImageURL} alt="user" />
      </div>
    )}
    <div className={styles.comment}>
      <span className={styles.user_id}>{userName}</span>&nbsp;
      <span>{content}</span>
      <div className={styles.time}>
        {createdAt && <RelativeTime datetime={createdAt}></RelativeTime>}
        {/* <span className="try_comment">답글 달기</span> */}
      </div>
      <div className={styles.icon_wrap}>
        <div className={styles.more_trigger}>
          <div className={styles.sprite_more_icon}></div>
        </div>
        <div>
          <div className={styles.sprite_small_heart_icon_outline}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Comment;
