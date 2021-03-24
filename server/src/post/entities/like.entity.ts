import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Post } from './post.entity';

@Entity()
@ObjectType()
@Unique(['postId', 'userId'])
export class Like {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  likeId: number;

  @CreateDateColumn()
  @Field((type) => Date)
  createdAt: string;

  @ManyToOne((type) => User, (user) => user.likes)
  @JoinColumn({ name: 'userId' })
  @Field(() => User)
  user: User;

  @Column()
  @Field()
  userId: number;

  @OneToOne((type) => Post, (post) => post.likes)
  @JoinColumn({ name: 'postId' })
  @Field(() => Post)
  post: Post;

  @Column()
  @Field()
  postId: number;
}
