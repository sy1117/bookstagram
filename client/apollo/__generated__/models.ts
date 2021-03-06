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
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  content: Scalars['String'];
  user: User;
  post: Post;
};

export type CreateCommentInput = {
  content: Scalars['String'];
  postId: Scalars['Float'];
};

export type CreatePostInput = {
  bookName: Scalars['String'];
  bookImageURL: Scalars['String'];
  content: Scalars['String'];
};

export type CreateUserInput = {
  userId: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};


export type EditProfileInput = {
  password?: Maybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<UserOutput>;
};

export type FollowOutput = {
  __typename?: 'FollowOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  follower: User;
  following: User;
};

export type Like = {
  __typename?: 'Like';
  likeId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
  post: Post;
  postId: Scalars['Float'];
};

export type LikePostInput = {
  postId: Scalars['Float'];
};

export type LikePostOutput = {
  __typename?: 'LikePostOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  post: Post;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginOutput;
  createUser: CreateUserOutput;
  editProfile: EditProfileOutput;
  follow: FollowOutput;
  createPost: Post;
  updatePost: Post;
  removePost: Post;
  likePost: LikePostOutput;
  createComment: Comment;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationEditProfileArgs = {
  editProfileInput: EditProfileInput;
};


export type MutationFollowArgs = {
  followingUserId: Scalars['String'];
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};


export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type MutationLikePostArgs = {
  likePostInput: LikePostInput;
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};

export type Post = {
  __typename?: 'Post';
  postId: Scalars['Float'];
  bookName: Scalars['String'];
  bookImageURL: Scalars['String'];
  content: Scalars['String'];
  user: User;
  comments: Array<Comment>;
  likes: Array<Like>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};


export type PostCommentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  whoAmI: User;
  seeProfile: SeeProfileOutput;
  posts: Array<Post>;
  comments: Array<Comment>;
  post: Post;
};


export type QueryPostsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCommentsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  postId: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type SeeProfileOutput = {
  __typename?: 'SeeProfileOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user: UserOutput;
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded: Comment;
};

export type UpdatePostInput = {
  bookName?: Maybe<Scalars['String']>;
  bookImageURL?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  userId: Scalars['String'];
  profileImageURL: Scalars['String'];
  password: Scalars['String'];
  posts: Array<Post>;
  comments: Array<Comment>;
  likes: Array<Like>;
};

export type UserOutput = {
  __typename?: 'UserOutput';
  id: Scalars['Float'];
};

export type OnCommentAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCommentAddedSubscription = (
  { __typename?: 'Subscription' }
  & { commentAdded: (
    { __typename?: 'Comment' }
    & Pick<Comment, 'createdAt' | 'content'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'profileImageURL'>
    ) }
  ) }
);

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

export type GetAllPostsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type GetAllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'postId' | 'bookImageURL' | 'bookName' | 'content' | 'createdAt' | 'updatedAt'>
    & { comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'content'>
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
  )> }
);

export type GetCommentsQueryVariables = Exact<{
  postId: Scalars['Int'];
  skip: Scalars['Int'];
  take: Scalars['Int'];
}>;


export type GetCommentsQuery = (
  { __typename?: 'Query' }
  & { comments: Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'content' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'profileImageURL'>
    ) }
  )> }
);

export type GetPostAndCommentsQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type GetPostAndCommentsQuery = (
  { __typename?: 'Query' }
  & { post: (
    { __typename?: 'Post' }
    & Pick<Post, 'bookImageURL' | 'bookName' | 'content'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'profileImageURL'>
    ), likes: Array<(
      { __typename?: 'Like' }
      & Pick<Like, 'likeId'>
    )> }
  ), comments: Array<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'content' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'profileImageURL'>
    ) }
  )> }
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


export const OnCommentAddedDocument = gql`
    subscription onCommentAdded {
  commentAdded {
    createdAt
    content
    user {
      userId
      profileImageURL
    }
  }
}
    `;

/**
 * __useOnCommentAddedSubscription__
 *
 * To run a query within a React component, call `useOnCommentAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCommentAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCommentAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCommentAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCommentAddedSubscription, OnCommentAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCommentAddedSubscription, OnCommentAddedSubscriptionVariables>(OnCommentAddedDocument, options);
      }
export type OnCommentAddedSubscriptionHookResult = ReturnType<typeof useOnCommentAddedSubscription>;
export type OnCommentAddedSubscriptionResult = Apollo.SubscriptionResult<OnCommentAddedSubscription>;
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
    query getAllPosts($skip: Int, $take: Int) {
  posts(skip: $skip, take: $take) {
    postId
    bookImageURL
    bookName
    content
    comments(skip: 0, take: 2) {
      user {
        userId
        profileImageURL
      }
      content
    }
    user {
      userId
      profileImageURL
    }
    likes {
      likeId
    }
    createdAt
    updatedAt
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
 *      skip: // value for 'skip'
 *      take: // value for 'take'
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
export const GetCommentsDocument = gql`
    query getComments($postId: Int!, $skip: Int!, $take: Int!) {
  comments(postId: $postId, skip: $skip, take: $take) {
    user {
      userId
      profileImageURL
    }
    content
    createdAt
  }
}
    `;

/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
      }
export function useGetCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsQuery, GetCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsQuery, GetCommentsQueryVariables>(GetCommentsDocument, options);
        }
export type GetCommentsQueryHookResult = ReturnType<typeof useGetCommentsQuery>;
export type GetCommentsLazyQueryHookResult = ReturnType<typeof useGetCommentsLazyQuery>;
export type GetCommentsQueryResult = Apollo.QueryResult<GetCommentsQuery, GetCommentsQueryVariables>;
export const GetPostAndCommentsDocument = gql`
    query getPostAndComments($postId: Int!) {
  post(id: $postId) {
    bookImageURL
    bookName
    content
    user {
      userId
      profileImageURL
    }
    likes {
      likeId
    }
  }
  comments(postId: $postId, skip: 0, take: 5) {
    user {
      userId
      profileImageURL
    }
    content
    createdAt
  }
}
    `;

/**
 * __useGetPostAndCommentsQuery__
 *
 * To run a query within a React component, call `useGetPostAndCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostAndCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostAndCommentsQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPostAndCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetPostAndCommentsQuery, GetPostAndCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostAndCommentsQuery, GetPostAndCommentsQueryVariables>(GetPostAndCommentsDocument, options);
      }
export function useGetPostAndCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostAndCommentsQuery, GetPostAndCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostAndCommentsQuery, GetPostAndCommentsQueryVariables>(GetPostAndCommentsDocument, options);
        }
export type GetPostAndCommentsQueryHookResult = ReturnType<typeof useGetPostAndCommentsQuery>;
export type GetPostAndCommentsLazyQueryHookResult = ReturnType<typeof useGetPostAndCommentsLazyQuery>;
export type GetPostAndCommentsQueryResult = Apollo.QueryResult<GetPostAndCommentsQuery, GetPostAndCommentsQueryVariables>;
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