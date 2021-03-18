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


export type Like = {
  __typename?: 'Like';
  likeId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  post: Post;
  postId: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  postId: Scalars['ID'];
  bookName: Scalars['String'];
  bookImageURL: Scalars['String'];
  content: Scalars['String'];
  user: User;
  comments: Array<Comment>;
  likes: Array<Like>;
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  password: Scalars['String'];
  posts: Array<Post>;
  comments: Array<Comment>;
  likes: Array<Post>;
  followings: Array<User>;
  followers: Array<User>;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user: User;
};

export type UserOutput = {
  __typename?: 'UserOutput';
  id: Scalars['String'];
};

export type SeeProfileOutput = {
  __typename?: 'SeeProfileOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user: UserOutput;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<UserOutput>;
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type LikePostOutput = {
  __typename?: 'LikePostOutput';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  post: Post;
};

export type Query = {
  __typename?: 'Query';
  seeProfile: SeeProfileOutput;
  posts: Array<Post>;
  post: Post;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: LoginOutput;
  createAccount: CreateAccountOutput;
  editProfile: EditProfileOutput;
  createPost: Post;
  updatePost: Post;
  removePost: Post;
  likePost: LikePostOutput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  id: Scalars['String'];
};


export type MutationCreateAccountArgs = {
  createAccountInput: CreateAccountInput;
};


export type MutationEditProfileArgs = {
  editProfileInput: EditProfileInput;
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

export type CreateAccountInput = {
  id: Scalars['String'];
  password: Scalars['String'];
};

export type EditProfileInput = {
  password?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  bookName: Scalars['String'];
  bookImageURL: Scalars['String'];
  content: Scalars['String'];
};

export type UpdatePostInput = {
  bookName?: Maybe<Scalars['String']>;
  bookImageURL?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type LikePostInput = {
  postId: Scalars['ID'];
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
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Like: ResolverTypeWrapper<Like>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Post: ResolverTypeWrapper<Post>;
  User: ResolverTypeWrapper<User>;
  CreateAccountOutput: ResolverTypeWrapper<CreateAccountOutput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UserOutput: ResolverTypeWrapper<UserOutput>;
  SeeProfileOutput: ResolverTypeWrapper<SeeProfileOutput>;
  EditProfileOutput: ResolverTypeWrapper<EditProfileOutput>;
  LoginOutput: ResolverTypeWrapper<LoginOutput>;
  LikePostOutput: ResolverTypeWrapper<LikePostOutput>;
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateAccountInput: CreateAccountInput;
  EditProfileInput: EditProfileInput;
  CreatePostInput: CreatePostInput;
  UpdatePostInput: UpdatePostInput;
  LikePostInput: LikePostInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Comment: Comment;
  ID: Scalars['ID'];
  String: Scalars['String'];
  DateTime: Scalars['DateTime'];
  Like: Like;
  Float: Scalars['Float'];
  Post: Post;
  User: User;
  CreateAccountOutput: CreateAccountOutput;
  Boolean: Scalars['Boolean'];
  UserOutput: UserOutput;
  SeeProfileOutput: SeeProfileOutput;
  EditProfileOutput: EditProfileOutput;
  LoginOutput: LoginOutput;
  LikePostOutput: LikePostOutput;
  Query: {};
  Int: Scalars['Int'];
  Mutation: {};
  CreateAccountInput: CreateAccountInput;
  EditProfileInput: EditProfileInput;
  CreatePostInput: CreatePostInput;
  UpdatePostInput: UpdatePostInput;
  LikePostInput: LikePostInput;
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

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  likeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  postId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bookName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bookImageURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  likes?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  likes?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  followings?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  followers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAccountOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAccountOutput'] = ResolversParentTypes['CreateAccountOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOutput'] = ResolversParentTypes['UserOutput']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeeProfileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeeProfileOutput'] = ResolversParentTypes['SeeProfileOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['UserOutput'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditProfileOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditProfileOutput'] = ResolversParentTypes['EditProfileOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['UserOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginOutput'] = ResolversParentTypes['LoginOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikePostOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikePostOutput'] = ResolversParentTypes['LikePostOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  seeProfile?: Resolver<ResolversTypes['SeeProfileOutput'], ParentType, ContextType>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['LoginOutput'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'password' | 'id'>>;
  createAccount?: Resolver<ResolversTypes['CreateAccountOutput'], ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'createAccountInput'>>;
  editProfile?: Resolver<ResolversTypes['EditProfileOutput'], ParentType, ContextType, RequireFields<MutationEditProfileArgs, 'editProfileInput'>>;
  createPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePostArgs, 'createPostInput'>>;
  updatePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePostArgs, 'updatePostInput'>>;
  removePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationRemovePostArgs, 'id'>>;
  likePost?: Resolver<ResolversTypes['LikePostOutput'], ParentType, ContextType, RequireFields<MutationLikePostArgs, 'likePostInput'>>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Like?: LikeResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  CreateAccountOutput?: CreateAccountOutputResolvers<ContextType>;
  UserOutput?: UserOutputResolvers<ContextType>;
  SeeProfileOutput?: SeeProfileOutputResolvers<ContextType>;
  EditProfileOutput?: EditProfileOutputResolvers<ContextType>;
  LoginOutput?: LoginOutputResolvers<ContextType>;
  LikePostOutput?: LikePostOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
