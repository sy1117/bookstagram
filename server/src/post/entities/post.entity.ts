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
import { Like } from './like.entity';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  postId: number;

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

  @OneToMany((type) => Comment, (comment) => comment.post)
  @Field(() => [Comment], { defaultValue: [] })
  comments?: [Comment];

  @OneToMany((type) => Like, (like) => like.post)
  @JoinColumn({ name: 'likeIds' })
  @Field(() => [Like], { defaultValue: [] })
  likes?: Like[];

  @UpdateDateColumn()
  @Field()
  updatedAt: Date;

  @CreateDateColumn()
  @Field()
  createdAt: Date;
}
