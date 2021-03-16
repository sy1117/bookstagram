import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { LikePostInput, LikePostOutput } from './dto/like-post.dto';
import { UsersService } from 'src/users/users.service';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly usersService: UsersService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Post)
  createPost(
    @AuthUser() user,
    @Args('createPostInput') createPostInput: CreatePostInput,
  ) {
    console.log('createpost', user);
    return this.postService.create(user, createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  findAll() {
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

  @Mutation(() => LikePostOutput)
  async likePost(@Args('input') { postId }: LikePostInput) {
    // get current user
    const userId = '1';
    const user = await this.usersService.findById(userId);
    return user;
  }
}
