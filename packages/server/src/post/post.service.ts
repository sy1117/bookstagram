import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postRepository: Repository<Post>,
  ) {}

  create(createPostInput: CreatePostInput) {
    return 'This action adds a new post';
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

  async like(id: number) {
    const post = await this.findOne(id);
    // post.likes = [...post.likes, user];
  }
}
