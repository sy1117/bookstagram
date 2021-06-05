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
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateCommentInput: CreateCommentInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  CreatePostInput: CreatePostInput;
  CreateUserInput: CreateUserInput;
  CreateUserOutput: ResolverTypeWrapper<CreateUserOutput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  EditProfileInput: EditProfileInput;
  EditProfileOutput: ResolverTypeWrapper<EditProfileOutput>;
  FollowOutput: ResolverTypeWrapper<FollowOutput>;
  Like: ResolverTypeWrapper<Like>;
  LikePostInput: LikePostInput;
  LikePostOutput: ResolverTypeWrapper<LikePostOutput>;
  LoginOutput: ResolverTypeWrapper<LoginOutput>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Post: ResolverTypeWrapper<Post>;
  Query: ResolverTypeWrapper<{}>;
  SeeProfileOutput: ResolverTypeWrapper<SeeProfileOutput>;
  Subscription: ResolverTypeWrapper<{}>;
  UpdatePostInput: UpdatePostInput;
  User: ResolverTypeWrapper<User>;
  UserOutput: ResolverTypeWrapper<UserOutput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  ID: Scalars['ID'];
  String: Scalars['String'];
  CreateCommentInput: CreateCommentInput;
  Float: Scalars['Float'];
  CreatePostInput: CreatePostInput;
  CreateUserInput: CreateUserInput;
  CreateUserOutput: CreateUserOutput;
  Boolean: Scalars['Boolean'];
  DateTime: Scalars['DateTime'];
  EditProfileInput: EditProfileInput;
  EditProfileOutput: EditProfileOutput;
  FollowOutput: FollowOutput;
  Like: Like;
  LikePostInput: LikePostInput;
  LikePostOutput: LikePostOutput;
  LoginOutput: LoginOutput;
  Mutation: {};
  Int: Scalars['Int'];
  Post: Post;
  Query: {};
  SeeProfileOutput: SeeProfileOutput;
  Subscription: {};
  UpdatePostInput: UpdatePostInput;
  User: User;
  UserOutput: UserOutput;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserOutput'] = ResolversParentTypes['CreateUserOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EditProfileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditProfileOutput'] = ResolversParentTypes['EditProfileOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FollowOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowOutput'] = ResolversParentTypes['FollowOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  follower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  following?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  likeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikePostOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikePostOutput'] = ResolversParentTypes['LikePostOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginOutput'] = ResolversParentTypes['LoginOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['LoginOutput'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'userId'>>;
  createUser?: Resolver<ResolversTypes['CreateUserOutput'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'createUserInput'>>;
  editProfile?: Resolver<ResolversTypes['EditProfileOutput'], ParentType, ContextType, RequireFields<MutationEditProfileArgs, 'editProfileInput'>>;
  follow?: Resolver<ResolversTypes['FollowOutput'], ParentType, ContextType, RequireFields<MutationFollowArgs, 'followingUserId'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'createPostInput'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'updatePostInput'>>;
  removePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationRemovePostArgs, 'id'>>;
  likePost?: Resolver<ResolversTypes['LikePostOutput'], ParentType, ContextType, RequireFields<MutationLikePostArgs, 'likePostInput'>>;
  createComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationCreateCommentArgs, 'createCommentInput'>>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  postId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  bookName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<PostCommentsArgs, never>>;
  likes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  whoAmI?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  seeProfile?: Resolver<ResolversTypes['SeeProfileOutput'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostsArgs, never>>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentsArgs, 'postId'>>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
};

export type SeeProfileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeeProfileOutput'] = ResolversParentTypes['SeeProfileOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserOutput'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  commentAdded?: SubscriptionResolver<ResolversTypes['Comment'], "commentAdded", ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  likes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOutput'] = ResolversParentTypes['UserOutput']> = {
  id?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  CreateUserOutput?: CreateUserOutputResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EditProfileOutput?: EditProfileOutputResolvers<ContextType>;
  FollowOutput?: FollowOutputResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  LikePostOutput?: LikePostOutputResolvers<ContextType>;
  LoginOutput?: LoginOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SeeProfileOutput?: SeeProfileOutputResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserOutput?: UserOutputResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
