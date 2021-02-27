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

export type CreateUserInput = {
  /** Password */
  password: Scalars['String'];
  /** UserName */
  userName: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  login: User;
  removeUser: User;
  updateUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  id: Scalars['Int'];
  /** Password */
  password?: Maybe<Scalars['String']>;
  /** UserName */
  userName?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  userName: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'userName' | 'password'>
  ) }
);
