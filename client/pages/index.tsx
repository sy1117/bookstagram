import dynamic from 'next/dynamic'
import React from 'react';
import Layout from '../layout/Layout';
import { useGetAllPostsQuery } from '../_generated/models';

const Feed = dynamic(
    () => import('@bookstagram/components').then((mod) => mod.Feed)
)

const Main = () => {
    const { data, error } = useGetAllPostsQuery()
    const posts = data?.posts || [];

    return (
        <Layout>
            {
                posts.map((data: any, idx) => (
                    <Feed data={data}></Feed>
                ))
            }
        </Layout>
    );
}


export default Main;
