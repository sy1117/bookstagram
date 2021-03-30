// import { Feed } from "@bookstagram/components";
import React, { useEffect, useState } from "react";
import {
  GetAllPostsDocument,
  Post,
  useCreateCommentMutation,
  useGetAllPostsQuery,
} from "../apollo/__generated__/models";
import { PostCard, ActionIcons } from "@bookstagram/components";
import { NextPage } from "next";
import { Modal } from "@bookstagram/components";

const Main: NextPage<{}> = () => {
  const { data, error, loading } = useGetAllPostsQuery();
  const posts = (data?.posts as Post[]) || [];
  const [postList, setPostList] = useState(posts);
  const [detailvisible, setdetailvisible] = useState(false);

  useEffect(() => {
    setPostList(posts);
  }, [data, loading]);

  const [comment] = useCreateCommentMutation({
    refetchQueries: [{ query: GetAllPostsDocument }],
  });

  const commentHandler = (postId: number) => async (event: any) => {
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
          { content, bookImageURL, bookName, user, likes, comments, postId },
          idx,
        ) => (
          <PostCard
            profileURL={"s"}
            content={content}
            imageURL={bookImageURL}
            subTitle={bookName}
            title={user?.userId}
            // likes={likes.length}
            actionIcons={
              <ActionIcons
                onCommentClick={() => {
                  setdetailvisible(true);
                }}
              />
            }
            // comments={comments}
            // onComment={commentHandler(postId)}
          />
        ),
      )}
      <Modal
        visible={detailvisible}
        onClose={() => {
          setdetailvisible(false);
        }}
      ></Modal>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Main;
