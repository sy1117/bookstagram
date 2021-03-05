import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Comment } from 'src/post/entities/comment.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field((type) => String)
  userName: string;

  @Column()
  @Field((type) => String)
  password: string;

  @OneToMany((type) => Post, (post: Post) => post.user)
  posts: Post[];

  @OneToMany((type) => Comment, (comment: Comment) => comment.user)
  comments: Comment[];

  @OneToMany((type) => Post, (post) => post.likes)
  likes: Post[];
}
