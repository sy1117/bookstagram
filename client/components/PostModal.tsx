import { PostModal } from "@bookstagram/components";
import React, { FormEventHandler, FormEvent } from "react";
import { useGetPostQuery } from "../apollo/__generated__/models";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const DetailModal: React.FC<{
  onClose: any;
  dataId: number;
  onComment: FormEventHandler;
}> = ({ onClose, dataId, onComment }) => {
  useLockBodyScroll();
  const { data, refetch } = useGetPostQuery({
    variables: {
      postId: dataId,
    },
  });

  const commentHandler = async (event: FormEvent) => {
    await onComment(event);
  };

  if (data?.post.__typename !== "Post") {
    return <div>loading</div>;
  }

  const {
    post: {
      bookImageURL,
      bookName,
      content,
      comments,
      user: { profileImageURL, userId },
    },
  } = data;

  return (
    <PostModal
      visible={true}
      onClose={onClose}
      profileImageURL={profileImageURL}
      mainImageURL={bookImageURL}
      bookName={bookName}
      userName={userId}
      content={content}
      comments={comments}
      onComment={commentHandler}
    ></PostModal>
  );
};

export default DetailModal;
