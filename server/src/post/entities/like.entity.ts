import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
@ObjectType()
export class Like {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @CreateDateColumn()
  @Field((type) => Date)
  createdAt: string;

  @ManyToOne((type) => User, (user) => user.likes)
  @Field(() => User)
  user: User;

  @ManyToOne((type) => Post, (post) => post.likes)
  @Field(() => Post)
  post: Post;

  @JoinColumn()
  @Field(() => ID)
  postId: number;
}
