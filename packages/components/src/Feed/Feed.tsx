import React from 'react';
//@ts-ignore
import styles from './Feed.module.scss';
import clsx from "clsx";
import { IComment, Comment } from './Comment';
import { HeartOutlined } from "@ant-design/icons";
import { IconHeart } from '../Icon/Icon';


export interface FeedProps {
    data: {
        content: string;
        imageURL: string;
        user: {
            userName: string;
        }
        comments: IComment[] | null;
    }
}

const Feed: React.FC<FeedProps> = ({ data: { content, imageURL, user: { userName }, comments } }) => {
    console.log("h", comments)
    return (
        <div className={styles.contents_box}>
            <article className={styles.contents}>
                <header className={styles.top}>
                    <div className={styles.user_container}>
                        <div className={styles.profile_img}>
                            <img src="imgs/thumb.jpeg" alt="프로필이미지" />
                        </div>
                        <div className={styles.user_name}>
                            <div className={clsx(styles.nick_name, styles.m_text)}>{userName}</div>
                            <div className={clsx(styles.country, styles.s_text)}>Seoul, South Korea</div>
                        </div>
                    </div>
                    <div className={styles.sprite_more_icon} data-name="more">
                        <ul className={styles.toggle_box}>
                            <li><input type="submit" className={styles.follow} value="팔로우" name="follow" /></li>
                            <li>수정</li>
                            <li>삭제</li>
                        </ul>
                    </div>
                </header>
                <div className={styles.img_section}>
                    <div className={styles.trans_inner}>
                        <div><img src={imageURL} alt="visual01" /></div>
                    </div>
                </div>
                <div className={styles.bottom_icons}>
                    <div className={styles.left_icons}>
                        <IconHeart />
                        {/* <div className={styles.heart_btn}>
                            <div className={styles.sprite_heart_icon_outline} data-name="39" ></div>
                        </div> */}
                        <div className={styles.sprite_bubble_icon}></div>
                        <div className={styles.sprite_share_icon} data-name="share"></div>
                    </div>
                    <div className={styles.right_icon}>
                        <div className={styles.sprite_bookmark_outline} data-name="bookmark"></div>
                    </div>
                </div>
                <div className={clsx(styles.likes, styles.m_text)}>
                    좋아요
                        <span id="like-count-39">2,346</span>
                    <span id="bookmark-count-39"></span>
                        개
                    </div>
                <div className={styles.comment_container}>
                    {comments?.map((comment) => (
                        <Comment data={comment as any} />
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
                </div>
                <div className={styles.timer}>1시간 전</div>
                <div className={styles.comment_field} id=" add-comment-post37">
                    <input type="text" placeholder="댓글달기..." />
                    <div className={clsx(styles.upload_btn, styles.m_text)} data-name="comment">게시</div>
                </div>
            </article>
        </div >
    )
}

export default Feed;