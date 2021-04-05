import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  post: Post;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['DateTime'];
  likeId: Scalars['ID'];
  post: Post;
  postId: Scalars['Float'];
  user: User;
  userId: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  bookImageURL: Scalars['String'];
  bookName: Scalars['String'];
  comments: Array<Comment>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  likes: Array<Like>;
  postId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  id: Scalars['Float'];
  likes: Array<Like>;
  password: Scalars['String'];
  posts: Array<Post>;
  profileImageURL: Scalars['String'];
  userId: Scalars['String'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  id: Scalars['Float'];
};

export type SeeProfileOutput = {
  __typename?: 'SeeProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user: UserOutput;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<UserOutput>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token: Scalars['String'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type FollowOutput = {
  __typename?: 'FollowOutput';
  error?: Maybe<Scalars['String']>;
  follower: User;
  ok: Scalars['Boolean'];
};

export type LikePostOutput = {
  __typename?: 'LikePostOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  post: Post;
};

export type Query = {
  __typename?: 'Query';
  post: Post;
  posts: Array<Post>;
  seeProfile: SeeProfileOutput;
  whoAmI: User;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  comment: Comment;
  createComment: Comment;
  createPost: Post;
  createUser: CreateUserOutput;
  editProfile: EditProfileOutput;
  follow: FollowOutput;
  likePost: LikePostOutput;
  login: LoginOutput;
  removePost: Post;
  updatePost: Post;
};


export type MutationCommentArgs = {
  createComment: CreateCommentInput;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationEditProfileArgs = {
  editProfileInput: EditProfileInput;
};


export type MutationLikePostArgs = {
  likePostInput: LikePostInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type CreateUserInput = {
  password: Scalars['String'];
  userId: Scalars['String'];
};

export type EditProfileInput = {
  password?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  bookImageURL: Scalars['String'];
  bookName: Scalars['String'];
  content: Scalars['String'];
};

export type UpdatePostInput = {
  bookImageURL?: Maybe<Scalars['String']>;
  bookName?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type LikePostInput = {
  postId: Scalars['Float'];
};

export type CreateCommentInput = {
  content: Scalars['String'];
  postId: Scalars['Float'];
};

export type CreateCommentMutationVariables = Exact<{
  postId: Scalars['Float'];
  content: Scalars['String'];
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'content'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId'>
    ) }
  ) }
);

export type CreatePostMutationVariables = Exact<{
  bookImageURL: Scalars['String'];
  bookName: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'postId' | 'bookImageURL' | 'bookName' | 'content'>
  ) }
);

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'postId' | 'bookImageURL' | 'bookName' | 'content'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'content'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'userId'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'userId'>
    ), likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'likeId'>
    )> }
  )> }
);

export type GetPostQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & Pick<Post, 'bookImageURL' | 'bookName' | 'content'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'content' | 'createdAt'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'userId' | 'profileImageURL'>
      ) }
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'profileImageURL'>
    ), likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'likeId'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  userId: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginOutput' }
    & Pick<LoginOutput, 'ok' | 'token' | 'error'>
  ) }
);

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = (
  { __typename?: 'Query' }
  & { whoAmI: (
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'profileImageURL'>
  ) }
);


export const CreateCommentDocument = gql`
    mutation createComment($postId: Float!, $content: String!) {
  createComment(createCommentInput: {postId: $postId, content: $content}) {
    content
    user {
      userId
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($bookImageURL: String!, $bookName: String!, $content: String!) {
  createPost(
    createPostInput: {bookImageURL: $bookImageURL, bookName: $bookName, content: $content}
  ) {
    postId
    bookImageURL
    bookName
    content
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      bookImageURL: // value for 'bookImageURL'
 *      bookName: // value for 'bookName'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const GetAllPostsDocument = gql`
    query getAllPosts {
  posts {
    postId
    bookImageURL
    bookName
    content
    comments {
      user {
        userId
      }
      content
    }
    user {
      userId
    }
    likes {
      likeId
    }
  }
}
    `;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
      }
export function useGetAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPostsQuery, GetAllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(GetAllPostsDocument, options);
        }
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<typeof useGetAllPostsLazyQuery>;
export type GetAllPostsQueryResult = Apollo.QueryResult<GetAllPostsQuery, GetAllPostsQueryVariables>;
export const GetPostDocument = gql`
    query getPost($postId: Int!) {
  post(id: $postId) {
    bookImageURL
    bookName
    content
    comments {
      user {
        userId
        profileImageURL
      }
      content
      createdAt
    }
    user {
      userId
      profileImageURL
    }
    likes {
      likeId
    }
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const LoginDocument = gql`
    mutation login($userId: String!, $password: String!) {
  login(userId: $userId, password: $password) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const WhoAmIDocument = gql`
    query whoAmI {
  whoAmI {
    userId
    profileImageURL
  }
}
    `;

/**
 * __useWhoAmIQuery__
 *
 * To run a query within a React component, call `useWhoAmIQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoAmIQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoAmIQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoAmIQuery(baseOptions?: Apollo.QueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
      }
export function useWhoAmILazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
        }
export type WhoAmIQueryHookResult = ReturnType<typeof useWhoAmIQuery>;
export type WhoAmILazyQueryHookResult = ReturnType<typeof useWhoAmILazyQuery>;
export type WhoAmIQueryResult = Apollo.QueryResult<WhoAmIQuery, WhoAmIQueryVariables>;