import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  @Field((type) => String)
  bookImageURL: string;

  @Column()
  @Field((type) => String)
  content: string;

  @ManyToOne((type) => User, (user) => user.posts, { nullable: true })
  @Field(() => User)
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.post)
  @Field(() => [Comment], { nullable: true })
  comments?: [Comment];

  @OneToMany((type) => User, (user) => user.likes)
  @Field(() => [User], { nullable: true })
  likes?: [User];
}
