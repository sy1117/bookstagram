import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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
  bookName: string;

  @Column()
  @Field((type) => String)
  bookImageURL: string;

  @Column()
  @Field((type) => String)
  content: string;

  @ManyToOne((type) => User, (user) => user.posts, { nullable: true })
  @JoinColumn({ name: 'userId' })
  @Field(() => User)
  user: User;

  @Field()
  userId: string;

  @OneToMany((type) => Comment, (comment) => comment.post)
  @Field(() => [Comment], { nullable: true })
  comments?: [Comment];

  @OneToMany((type) => User, (user) => user.likes)
  @Field(() => [User], { nullable: true })
  likes?: [User];

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
