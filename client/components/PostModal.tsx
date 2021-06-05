import { PostModal } from "@bookstagram/components";
import React, { FormEventHandler, FormEvent } from "react";
import {
  GetCommentsDocument,
  useGetPostAndCommentsQuery,
} from "../apollo/__generated__/models";
import useFetchComments from "../hooks/useFetchComments";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const DetailModal: React.FC<{
  onClose: any;
  dataId: number;
  onComment: FormEventHandler;
}> = ({ onClose, dataId, onComment }) => {
  useLockBodyScroll();
  const { data, refetch } = useGetPostAndCommentsQuery({
    variables: {
      postId: dataId,
    },
  });
  const { loading, data: commentResult, refetch: fetchMore } = useFetchComments(
    {
      postId: dataId,
      skip: data?.comments.length || 0,
      take: 5,
    },
  );

  const commentHandler = async (event: FormEvent) => {
    await onComment(event);
    refetch();
  };

  if (data?.post.__typename !== "Post") {
    return <div>loading</div>;
  }

  const {
    post: {
      bookImageURL,
      bookName,
      content,
      user: { profileImageURL, userId },
    },
  } = data;

  const comments = commentResult?.comments;

  const onCommentsMore = () => {
    fetchMore({
      postId: dataId,
      skip: comments.length || 0,
      take: 5,
    });
  };

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
      onCommentsMore={onCommentsMore}
    ></PostModal>
  );
};

export default DetailModal;
