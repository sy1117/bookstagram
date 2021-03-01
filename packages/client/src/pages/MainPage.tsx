import { useQuery } from '@apollo/client';
import { Feed } from '@bookstagram/components'
import { Queries } from '@testing-library/dom';
import { loader } from 'graphql.macro';
import { isLoggedInVar } from '../apollo/auth';
import { GetAllPostsQueryVariables, Query } from '../_generated/models';
// import { useQuery } from '@apollo/client';
const GET_ALL_POST = loader("../graphql/GET_ALL_POST.gql");

const MainPage = () => {

    const { loading, data, error } = useQuery<Query, GetAllPostsQueryVariables>(GET_ALL_POST, {
        onError() {
            console.log("error")
            isLoggedInVar(false)
        }
    });

    const posts = data?.posts || [];
    console.log(data, error, posts)
    return (
        <div id="main_container">
            {posts.map(({ content, bookImageURL, user: { userName } }) => (
                <Feed content={content} imageURL={bookImageURL} userName={userName}></Feed>
            ))}
        </div>
    )
}

export default MainPage
