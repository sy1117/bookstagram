import { useQuery } from '@apollo/client';
import { Feed } from '@bookstagram/components'
import { Queries } from '@testing-library/dom';
import { loader } from 'graphql.macro';
import { isLoggedInVar } from '../apollo/auth';
import { GetAllPostsQueryVariables, Query, useGetAllPostsQuery } from '../_generated/models';
// import { useQuery } from '@apollo/client';
const GET_ALL_POST = loader("../graphql/GET_ALL_POST.gql");

const MainPage = () => {

    const { data, error } = useGetAllPostsQuery()
    const posts = data?.posts || [];

    return (
        <div id="main_container">
            {posts.map((data) => (
                <Feed data={data}></Feed>
            ))}
        </div>
    )
}

export default MainPage
