import React from "react";
import { IconHeart, IconComment } from "../../atoms/Icon/Icon";
//@ts-ignore
import styles from "./ActionIcons.module.scss";

export interface ActionIconsProps {
  like?: boolean;
  onLikeClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onCommentClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
}

export const ActionIcons: React.FC<ActionIconsProps> = ({
  like,
  onLikeClick,
  onCommentClick,
}) => {
  return (
    <>
      <div className={styles.left_icons}>
        <div className={styles.like_icon} onClick={onLikeClick}>
          <IconHeart fill={like} />
        </div>
        <div className={styles.like_icon} onClick={onCommentClick}>
          <IconComment />
        </div>
        {/* <div className={styles.sprite_bubble_icon}></div> */}
        <div className={styles.sprite_share_icon} data-name="share"></div>
      </div>
      <div className={styles.right_icon}>
        <div
          className={styles.sprite_bookmark_outline}
          data-name="bookmark"
        ></div>
      </div>
    </>
  );
};

export default ActionIcons;
