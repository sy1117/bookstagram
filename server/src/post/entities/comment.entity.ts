import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @CreateDateColumn()
  @Field((type) => Date)
  createdAt: string;

  @UpdateDateColumn()
  @Field((type) => Date)
  updatedAt: string;

  @Column()
  @Field((type) => String)
  content: string;

  @ManyToOne((type) => User, (user) => user.comments)
  @Field(() => User)
  user: User;

  @ManyToOne((type) => Post, (post) => post.comments)
  @Field(() => Post)
  post: Post;
}
