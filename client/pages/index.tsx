import dynamic from "next/dynamic";
import React from "react";
import Layout from "../layout/Layout";
// const Feed = dynamic(() =>
//   import("@bookstagram/components").then((mod) => mod.Feed),
// );
import Feed from "@bookstagram/components";

const Main = () => {
  const { data, error } = useGetAllPostsQuery();
  const posts = data?.posts || [];

  return (
    <Layout>
      {posts.map((data: any, idx) => (
        <Feed data={data} />
      ))}
    </Layout>
  );
};

export default Main;
