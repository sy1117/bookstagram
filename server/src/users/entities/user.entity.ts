import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString } from 'class-validator';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { Post } from 'src/post/entities/post.entity';
import { Comment } from 'src/post/entities/comment.entity';
import { Like } from 'src/post/entities/like.entity';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  @IsString()
  userId: string;

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

  @OneToMany((type) => Like, (like) => like.userId)
  @Field(() => [Like])
  likes: Like[];

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
