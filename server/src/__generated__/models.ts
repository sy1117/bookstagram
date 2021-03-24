import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Comment: ResolverTypeWrapper<Comment>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Like: ResolverTypeWrapper<Like>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Post: ResolverTypeWrapper<Post>;
  User: ResolverTypeWrapper<User>;
  UserOutput: ResolverTypeWrapper<UserOutput>;
  SeeProfileOutput: ResolverTypeWrapper<SeeProfileOutput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  EditProfileOutput: ResolverTypeWrapper<EditProfileOutput>;
  LoginOutput: ResolverTypeWrapper<LoginOutput>;
  CreateUserOutput: ResolverTypeWrapper<CreateUserOutput>;
  FollowOutput: ResolverTypeWrapper<FollowOutput>;
  LikePostOutput: ResolverTypeWrapper<LikePostOutput>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateUserInput: CreateUserInput;
  EditProfileInput: EditProfileInput;
  CreatePostInput: CreatePostInput;
  UpdatePostInput: UpdatePostInput;
  LikePostInput: LikePostInput;
  CreateCommentInput: CreateCommentInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  String: Scalars['String'];
  ID: Scalars['ID'];
  DateTime: Scalars['DateTime'];
  Like: Like;
  Float: Scalars['Float'];
  Post: Post;
  User: User;
  UserOutput: UserOutput;
  SeeProfileOutput: SeeProfileOutput;
  Boolean: Scalars['Boolean'];
  EditProfileOutput: EditProfileOutput;
  LoginOutput: LoginOutput;
  CreateUserOutput: CreateUserOutput;
  FollowOutput: FollowOutput;
  LikePostOutput: LikePostOutput;
  Query: {};
  Int: Scalars['Int'];
  Mutation: {};
  CreateUserInput: CreateUserInput;
  EditProfileInput: EditProfileInput;
  CreatePostInput: CreatePostInput;
  UpdatePostInput: UpdatePostInput;
  LikePostInput: LikePostInput;
  CreateCommentInput: CreateCommentInput;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  likeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  bookImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  likes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  likes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOutput'] = ResolversParentTypes['UserOutput']> = {
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeProfileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeeProfileOutput'] = ResolversParentTypes['SeeProfileOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserOutput'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditProfileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditProfileOutput'] = ResolversParentTypes['EditProfileOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginOutput'] = ResolversParentTypes['LoginOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserOutput'] = ResolversParentTypes['CreateUserOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowOutput'] = ResolversParentTypes['FollowOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  follower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikePostOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikePostOutput'] = ResolversParentTypes['LikePostOutput']> = {
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  seeProfile?: Resolver<ResolversTypes['SeeProfileOutput'], ParentType, ContextType>;
  whoAmI?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCommentArgs, 'createComment'>>;
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'createCommentInput'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'createPostInput'>>;
  createUser?: Resolver<ResolversTypes['CreateUserOutput'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserInput'>>;
  editProfile?: Resolver<ResolversTypes['EditProfileOutput'], ParentType, ContextType, RequireFields<MutationEditProfileArgs, 'editProfileInput'>>;
  follow?: Resolver<ResolversTypes['FollowOutput'], ParentType, ContextType>;
  likePost?: Resolver<ResolversTypes['LikePostOutput'], ParentType, ContextType, RequireFields<MutationLikePostArgs, 'likePostInput'>>;
  login?: Resolver<ResolversTypes['LoginOutput'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'userId'>>;
  removePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationRemovePostArgs, 'id'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'updatePostInput'>>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Like?: LikeResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserOutput?: UserOutputResolvers<ContextType>;
  SeeProfileOutput?: SeeProfileOutputResolvers<ContextType>;
  EditProfileOutput?: EditProfileOutputResolvers<ContextType>;
  LoginOutput?: LoginOutputResolvers<ContextType>;
  CreateUserOutput?: CreateUserOutputResolvers<ContextType>;
  FollowOutput?: FollowOutputResolvers<ContextType>;
  LikePostOutput?: LikePostOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
