import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment, Like])],
  providers: [PostResolver, PostService],
})
export class PostModule {}
