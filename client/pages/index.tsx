import React, { useState } from "react";
import { PostCard } from "@bookstagram/components";
import { ActionIcons } from "@bookstagram/components";
import {
  GetAllPostsDocument,
  Post,
  useCreateCommentMutation,
} from "../apollo/__generated__/models";
import PostModal from "../components/PostModal";
import useFetchMore from "../hooks/useFetchMore";

const OFFSET = 5;

const Main = () => {
  const { data, loading } = useFetchMore(GetAllPostsDocument, OFFSET);
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
        (
          {
            content,
            bookImageURL,
            bookName,
            user,
            likes,
            comments,
            postId,
            createdAt,
          },
          idx,
        ) => (
          <PostCard
            profileImageURL={user.profileImageURL}
            content={content}
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
            key={idx}
          />
        ),
      )}
      {loading}
      {detailvisible && (
        <PostModal
          dataId={detailvisible}
          onClose={() => setdetailvisible(false)}
          onComment={commentHandler(detailvisible)}
        />
      )}
    </>
  );
};

export default Main;
