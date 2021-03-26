import React, { FormEvent } from "react";
//@ts-ignore
import styles from "./PostCard.module.scss";
import clsx from "clsx";
import { IconSmile } from "../../atoms/Icon/Icon";

export interface PostCardProps {
  profileURL: string;
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
  profileURL = defaultProfileImage,
  imageURL,
  content,
  actionIcons,

  // like = false,
  likes = 0,
  comments = 0,
  onComment,
  // onLike,
}) => {
  const commentHandler = (event: FormEvent) => {
    event.preventDefault();
    onComment(event);
  };
  return (
    <div className={styles.contents_box}>
      <article className={styles.contents}>
        <header className={styles.top}>
          <div className={styles.user_container}>
            <div className={styles.profile_img}>
              <img src={profileURL} alt="프로필 이미지" />
            </div>
            <div className={styles.user_name}>
              <div className={clsx(styles.nick_name, styles.m_text)}>
                {title}
              </div>
              <div className={clsx(styles.country, styles.s_text)}>
                {subTitle}
              </div>
            </div>
          </div>
          <div className={styles.sprite_more_icon} data-name="more">
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
          </div>
        </header>
        <div className={styles.img_section}>
          <div className={styles.trans_inner}>
            <div className={styles.img_container}>
              <img src={imageURL} alt="image" />
            </div>
          </div>
        </div>
        <div className={styles.bottom_icons}>{actionIcons}</div>
        {/* {likes > 0 && ( */}
        <div className={clsx(styles.likes, styles.m_text)}>
          <span>
            좋아요 <span id="like-count-39">{likes}</span>개{"\t"}
          </span>
          <span>
            댓글 <span id="like-count-39">{comments}</span>개{" "}
          </span>
        </div>
        <div className={styles.content_container}>
          <span className={styles.m_text}>{title}</span>
          <span className={styles.content}>{content}</span>
        </div>
        <div className={styles.comment_container}>
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
        </div>
        <div className={styles.timer}>1시간 전</div>
        <form onSubmit={commentHandler}>
          <div className={styles.comment_field} id=" add-comment-post37">
            <div className={styles.icon}>
              <IconSmile />
            </div>
            <input type="text" name="comment" placeholder="댓글달기..." />
            <button
              className={clsx(styles.upload_btn, styles.m_text)}
              data-name="comment"
            >
              게시
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

export default PostCard;
