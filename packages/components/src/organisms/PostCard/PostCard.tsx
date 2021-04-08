import React, { FormEvent } from "react";
//@ts-ignore
import styles from "./PostCard.module.scss";
import CommentField from "../../molecures/CommentField/CommentField";
import PostHeader from "../../molecures/PostHeader/PostHeader";
import clsx from "clsx";

export interface PostCardProps {
  profileImageURL: string;
  title: string;
  subTitle: string;
  imageURL: string;
  content: string;
  // icons: JSX.Element;
  actionIcons?: JSX.Element;
  // comments?: Array<any>;
  // like?: boolean;
  likes?: number;
  comments?: number;
  onComment?: (event: FormEvent) => void;
  // onLike?: () => void;
}

const defaultProfileImage =
  "https://instagram.fjrs8-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fjrs8-1.fna.fbcdn.net&_nc_ohc=hLTkwc3uTqUAX_XtCE4&ccb=7-4&oh=8de804fc6efffe6b0a222043b06583dc&oe=6087738F&_nc_sid=cff2a4&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4";

export const PostCard: React.FC<PostCardProps> = ({
  title,
  subTitle,
  profileImageURL = defaultProfileImage,
  imageURL,
  content,
  actionIcons,
  likes = 0,
  comments = 0,
  onComment,
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
          <div className={styles.trans_inner}>
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
            댓글 <span>{comments}</span>개{" "}
          </span>
        </section>
        <section className={styles.content_container}>
          <span className={styles.m_text}>{title}</span>
          <span className={styles.content}>{content}</span>
        </section>
        <section className={styles.comment_container}>
          <a className={styles.show_all_btn} href={"#"}>
            댓글 {comments}개 모두 보기{" "}
          </a>
          {/* {comments?.map((comment) => (
            <Comment data={comment as any} />
          ))} */}
          {/* <div className={styles.comment} id="comment-list-ajax-post37">
                        <div className={clsx(styles.comment, styles.detail)}>
                            <div className={clsx(styles.nick_name, styles.m_text)}>dongdong2</div>
                            <div>{content}</div>
                        </div>
                    </div>
                    <div className={styles.small_heart}>
                        <div className={styles.sprite_small_heart_icon_outline}></div>
                    </div> */}
        </section>
        <section className={styles.timer}>1시간 전</section>
        <section>
          <CommentField onSubmit={commentHandler} />
          {/* <form onSubmit={commentHandler}>
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
          </form> */}
        </section>
      </article>
    </div>
  );
};

export default PostCard;
