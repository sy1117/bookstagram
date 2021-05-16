// import { Feed } from "@bookstagram/components";
import React, { FormEvent, FormEventHandler, useState } from "react";
import { PostModal } from "@bookstagram/components";
import { NextPage } from "next";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import { PostCard } from "@bookstagram/components";
import { ActionIcons } from "@bookstagram/components";
import {
  GetAllPostsDocument,
  Post,
  useCreateCommentMutation,
  useGetAllPostsQuery,
  useGetPostQuery,
} from "../apollo/__generated__/models";

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

  return (
    <PostModal
      visible={true}
      onClose={onClose}
      profileImageURL={data?.post.user.profileImageURL}
      mainImageURL={data?.post.bookImageURL}
      bookName={data?.post.bookName}
      userName={data?.post.user.userId}
      content={data?.post.content}
      onComment={commentHandler}
    ></PostModal>
  );
};

const Main: NextPage<{}> = () => {
  const { data, loading } = useGetAllPostsQuery();
  const posts = (data?.posts as Post[]) || [];
  const [detailvisible, setdetailvisible] = useState<number | false>(false);
  const [comment] = useCreateCommentMutation({
    refetchQueries: [{ query: GetAllPostsDocument }],
  });
  const commentHandler = (postId: number) => async (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const formEl = event.currentTarget;
    const formdata = new FormData(event.currentTarget);
    const result = await comment({
      variables: {
        postId,
        content: formdata.get("content") as string,
      },
    });
    if (result) {
      formEl.reset();
    }
  };

  return (
    <>
      {posts.map(
        ({
          content,
          bookImageURL,
          bookName,
          user,
          likes,
          comments,
          postId,
          createdAt,
        }) => (
          <PostCard
            profileURL={"s"}
            content={content}
            profileImageURL={user.profileImageURL}
            imageURL={bookImageURL || "https://picsum.photos/300/300.jpg"}
            subTitle={bookName}
            title={user?.userId}
            comments={comments || []}
            likes={likes.length}
            actionIcons={
              <ActionIcons
                onCommentClick={() => {
                  setdetailvisible(postId);
                }}
              />
            }
            onComment={commentHandler(postId)}
            createdAt={createdAt}
          />
        ),
      )}
      {detailvisible && (
        <DetailModal
          dataId={detailvisible}
          onClose={() => setdetailvisible(false)}
          onComment={commentHandler(detailvisible)}
        />
      )}
    </>
  );
};

export default Main;
