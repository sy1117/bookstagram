import React, { FormEventHandler } from "react";
import styles from "./PostModal.module.scss";
import CommentField from "../../molecures/CommentField/CommentField";
import Comment, { CommentProps } from "../../molecures/Comment/Comment";
import PostHeader from "../../molecures/PostHeader/PostHeader";

const CloseButton = ({ onClick }) => (
  <div className={styles.close_btn} onClick={onClick}>
    <svg
      aria-label="닫기"
      fill="#ffffff"
      height="24"
      viewBox="0 0 48 48"
      width="24"
    >
      <path
        d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </div>
);

export interface PostModalProps {
  visible?: boolean;
  onClose?: () => void;
  mainImageURL: string;
  profileImageURL: string;
  userName: string;
  bookName: string;
  content: string;
  comments: Array<CommentProps>;
  onComment: FormEventHandler;
}

const PostModal: React.FC<PostModalProps> = ({
  visible = false,
  mainImageURL,
  onClose,
  comments,
  onComment,
  profileImageURL,
  userName,
  content,
  bookName,
}) => {
  return (
    visible && (
      <div className={styles.root} hidden={!visible}>
        <div className={styles.container}>
          <CloseButton onClick={onClose} />
          <div className={styles.dialog}>
            <div className={styles.dialog_container}>
              <div className={styles.image}>
                <img src={mainImageURL} />
              </div>
              <div className={styles.content}>
                <PostHeader
                  profileImageURL={profileImageURL}
                  userName={userName}
                  postTitle={bookName}
                />
                <div className={styles.scroll_section}>
                  <div className={styles.content_container}>
                    {/* <span className={styles.m_text}>{userName}</span> */}
                    {/* <span className={styles.s_text}>{content}</span> */}
                    {content}
                  </div>
                  <div className={styles.comments_container}>
                    {comments?.map((props: any, idx) => (
                      <Comment
                        profileImageURL={props.user.profileImageURL}
                        userName={props.user.userId}
                        {...props}
                        key={idx}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <CommentField onSubmit={onComment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PostModal;
