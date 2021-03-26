import clsx from "clsx";
import React from "react";
import { IconSmile } from "../../atoms/Icon/Icon";
//@ts-ignore
import styles from "./Comment.module.scss";

const CommentField = () => {
  return (
    // <form onSubmit={commentHandler}>
    <div className={styles.comment_field} id=" add-comment-post37">
      <div className={styles.icon}>
        <IconSmile />
      </div>
      <input type="text" name="content" placeholder="댓글달기..." />
      <button
        className={clsx(styles.upload_btn, styles.m_text)}
        data-name="comment"
      >
        게시
      </button>
    </div>
    // </form>
  );
};

export default CommentField;
