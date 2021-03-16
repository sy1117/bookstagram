import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
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

  async findOne(id: number) {
    return await this.postRepository.findOne({ id });
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }

  async like(user: User, postId: number) {
    const newComment = new Comment();
  }
}
