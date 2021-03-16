import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  PrimaryColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Post } from 'src/post/entities/post.entity';
import { Comment } from 'src/post/entities/comment.entity';

export enum UserRole {
  HOST = 'HOST',
  LISTENER = 'LISTENER',
}
@ObjectType()
@Entity()
export class User {
  @PrimaryColumn()
  @Field(() => String)
  @IsString()
  id: string;

  @Column({ select: false })
  @Field(() => String)
  @IsString()
  password: string;

  @OneToMany((type) => Post, (post: Post) => post.user)
  @Field(() => [Post])
  posts: Post[];

  @OneToMany((type) => Comment, (comment: Comment) => comment.user)
  @Field(() => [Comment])
  comments: Comment[];

  @OneToMany((type) => Post, (post) => post.likes)
  @Field(() => [Post])
  likes: Post[];

  @OneToMany((type) => User, (user) => user.followings)
  @Field(() => [User])
  followings: User[];

  @OneToMany((type) => User, (user) => user.followers)
  @Field(() => [User])
  followers: User[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        throw new InternalServerErrorException(error);
      }
    }
  }

  async checkPassword(password: string): Promise<boolean> {
    try {
      const ok = await bcrypt.compare(password, this.password);
      return ok;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
