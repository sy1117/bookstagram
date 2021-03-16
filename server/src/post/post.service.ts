import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Comment } from './entities/comment.entity';
import { Post } from './entities/post.entity';
import { Like } from './entities/like.entity';
import { UsersService } from 'src/users/users.service';

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

  async findAll() {
    return await this.postRepository.find({
      relations: ['user', 'comments', 'comments.user'],
    });
  }

  async findOne(postId: number) {
    return await this.postRepository.findOne(postId);
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  async like(userId: string, postId: number) {
    const post = await this.postRepository.findOne(postId);
    const user = await this.userService.findOne(userId);
    const like = await this.likeRepository.create({
      post,
      user,
    });
    await this.likeRepository.save(like);
    return {
      ok: true,
      post: await this.postRepository.findOne(postId, { relations: ['likes'] }),
    };
  }
}
