import React, { FormEvent } from "react";
import styles from "./PostCard.module.scss";
import Comment from "../../molecures/Comment/Comment";
import CommentField from "../../molecures/CommentField/CommentField";
import PostHeader from "../../molecures/PostHeader/PostHeader";
import clsx from "clsx";
import RelativeTime from "../../atoms/RelativeTime/RelativeTime";

export interface PostCardProps {
  profileImageURL: string;
  title: string;
  subTitle: string;
  imageURL: string;
  content: string;
  // icons: JSX.Element;
  actionIcons?: JSX.Element;
  // like?: boolean;
  likes?: number;
  comments?: Array<any>;
  onComment?: (event: FormEvent) => void;
  createdAt?: string;
  // onLike?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  subTitle,
  profileImageURL,
  imageURL,
  content,
  actionIcons,
  likes = 0,
  comments,
  onComment,
  createdAt,
}) => {
  const commentHandler = (event: FormEvent) => {
    event.preventDefault();
    onComment(event);
  };

  return (
    <div className={styles.contents_box}>
      <article className={styles.contents}>
        <PostHeader
          profileImageURL={profileImageURL}
          userName={title}
          postTitle={subTitle}
        />
        <section className={styles.img_section}>
          {/* <div className={styles.trans_inner}> */}
          <div>
            <div className={styles.img_container}>
              <img src={imageURL} alt="image" />
            </div>
          </div>
        </section>
        <section className={styles.bottom_icons}>{actionIcons}</section>
        <section className={clsx(styles.likes, styles.m_text)}>
          <span>
            좋아요 <span>{likes}</span>개{"\t"}
          </span>
          <span>
            댓글 <span>{comments.length}</span>개{" "}
          </span>
        </section>
        <section className={styles.content_container}>
          <span className={styles.m_text}>{title}</span>&nbsp;
          {/* <span className={styles.content}>{content}</span> */}
          <span>{content}</span>
        </section>
        <section className={styles.comment_container}>
          <a className={styles.show_all_btn} onClick={commentHandler}>
            댓글 {comments.length}개 모두 보기
          </a>
          {comments?.length > 0 &&
            comments
              .slice(0, Math.min(2, comments.length))
              .map((comment, idx) => (
                <Comment
                  dense={true}
                  userName={comment.user.userId}
                  content={comment.content}
                  key={idx}
                />
              ))}
          {/* <div className={styles.comment} id="comment-list-ajax-post37">
                        <div className={clsx(styles.comment, styles.detail)}>
                            <div className={clsx(styles.nick_name, styles.m_text)}>dongdong2</div>
                            <div>{content}</div>
                        </div>
                    </div>
                    <div className={styles.small_heart}>
                        <div className={styles.sprite_small_heart_icon_outline}></div>
                    </div> */}
          <br />
          <RelativeTime datetime={createdAt} />
        </section>
        <section>
          <CommentField onSubmit={commentHandler} />
        </section>
      </article>
    </div>
  );
};

export default PostCard;
