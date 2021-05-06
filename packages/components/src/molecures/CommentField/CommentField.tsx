import clsx from "clsx";
import React, { FormEvent, FormEventHandler } from "react";
import { IconSmile } from "../../atoms/Icon/Icon";
import styles from "./Comment.module.scss";

export interface CommentFieldProps {
  onSubmit?: FormEventHandler;
}

const CommentField: React.FC<CommentFieldProps> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.comment_field} id=" add-comment-post37">
        <div className={styles.icon}>
          <IconSmile />
        </div>
        <input type="text" name="content" placeholder="댓글달기..." />
        <input
          className={clsx(styles.upload_btn, styles.m_text)}
          data-name="comment"
          type="submit"
          value={"게시"}
        />
      </div>
    </form>
  );
};

export default CommentField;
