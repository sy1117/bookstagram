import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Subscription,
  GqlExecutionContext,
} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { LikePostInput, LikePostOutput } from './dto/like-post.dto';
import { UsersService } from 'src/users/users.service';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { Inject, UseGuards } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { PubSub } from 'apollo-server-express';
import { JwtService } from 'src/jwt/jwt.service';
import { PUB_SUB } from 'src/common/common.constant';

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @Inject(PUB_SUB) private readonly pubSub: PubSub,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Post)
  createPost(
    @AuthUser() user,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    return this.postService.create(user, createPostInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [Post], { name: 'posts' })
  findAll(@AuthUser() user) {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  @Mutation(() => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(() => Post)
  removePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.remove(id);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => LikePostOutput)
  likePost(@AuthUser() user, @Args('likePostInput') { postId }: LikePostInput) {
    return this.postService.like(user.userId, postId);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Comment)
  async createComment(
    @AuthUser() user,
    @Args('createCommentInput') createComment: CreateCommentInput,
  ) {
    const result = await this.postService.comment(user?.userId, createComment);
    if (result) {
      this.pubSub.publish('commentAdded', { commentAdded: result, user });
    }
    return result;
  }
  @UseGuards(GqlAuthGuard)
  @Subscription((returns) => Comment, {
    filter: (payload, variables, context) => {
      if (!context.user) return false;
      return payload.commentAdded?.user.userId === context.user.userId;
    },
  })
  commentAdded(@AuthUser() user) {
    console.log(user);
    return this.pubSub.asyncIterator('commentAdded');
  }
}
