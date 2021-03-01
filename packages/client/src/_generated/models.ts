export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreatePostInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type LoginInput = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  login: User;
  removePost: Post;
  updatePost: Post;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};


export type MutationUpdatePostArgs = {
  updatePostInput: UpdatePostInput;
};

export type Post = {
  __typename?: 'Post';
  bookImageURL: Scalars['String'];
  content: Scalars['String'];
  id: Scalars['ID'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  post: Post;
  posts: Array<Post>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type UpdatePostInput = {
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'bookImageURL' | 'content'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'userName'>
    ) }
  )> }
);

export type LoginMutationVariables = Exact<{
  userName: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'userName'>
  ) }
);
