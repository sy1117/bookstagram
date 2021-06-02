import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Comment } from './entities/comment.entity';
import { Post } from './entities/post.entity';
import { Like } from './entities/like.entity';
import { UsersService } from 'src/users/users.service';
import { CreateCommentInput } from './dto/create-comment.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    private readonly userService: UsersService,
  ) {}

  async create(user, createPostInput: CreatePostInput) {
    try {
      const post = await this.postRepository.create(createPostInput);
      post.user = await this.userService.findOne(user.id);
      await this.postRepository.save(post);
      return post;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll({ skip, take }) {
    return await this.postRepository.find({
      relations: ['user', 'comments', 'comments.user', 'likes', 'likes.user'],
      order: {
        updatedAt: 'DESC',
      },
      skip,
      take,
    });
  }

  async findOne(postId: number) {
    return await this.postRepository.findOne(postId, {
      relations: ['user', 'comments', 'comments.user', 'likes', 'likes.user'],
    });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  async like(userId: number, postId: number) {
    try {
      const post = await this.postRepository.findOne({ postId });
      const user = await this.userService.findOne({ userId });

      let like = await this.likeRepository.findOne({
        userId: user.id,
        postId,
      });

      if (like) {
        return {
          ok: false,
          error: 'already likes',
        };
      }

      like = await this.likeRepository.create({
        post,
        user,
      });

      await this.likeRepository.save(like);
      return {
        ok: true,
        post: await this.postRepository.findOne(postId, {
          relations: ['likes'],
        }),
      };
    } catch (error) {
      return {
        ok: false,
        error: error,
      };
    }
  }

  async comment(userId: string, { content, postId }: CreateCommentInput) {
    const { user } = await this.userService.findByUserId(userId);
    if (!user) return false;

    const post = await this.postRepository.findOne(postId);
    if (!post) return false;

    const comment = await this.commentRepository.create({
      content,
      user,
      post,
    });

    await this.commentRepository.save(comment);

    return comment;
  }

  async findAllComments({
    postId,
    skip,
    take,
  }: {
    postId: number;
    skip: number;
    take: number;
  }) {
    return await this.commentRepository.find({
      where: {
        post: { postId },
      },
      relations: ['user'],
      order: {
        updatedAt: 'DESC',
      },
      skip,
      take,
    });
  }
}
