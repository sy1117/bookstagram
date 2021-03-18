// import { Feed } from "@bookstagram/components";
import React from "react";
import { useGetAllPostsQuery } from "../apollo/__generated__/models";
import { Feed } from "@bookstagram/components";
import { NextPage } from "next";

const Main: NextPage<{}> = () => {
  const { data, error } = useGetAllPostsQuery();
  const posts = data?.posts || [];

  console.log(Feed);

  return (
    // <Layout>
    <>
      {posts.map(({ content, bookImageURL, user, likes }, idx) => (
        //@ts-ignore
        <Feed
          content={content}
          imageURL={bookImageURL}
          userId={user?.id}
          likes={likes.length}
        />
      ))}
    </>
  );
};

export async function getServerSideProps() {
  console.log(Feed);
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Main;
