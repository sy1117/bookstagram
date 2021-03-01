import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Comment {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @CreateDateColumn()
  @Field((type) => CreateDateColumn)
  createdAt: string;

  @UpdateDateColumn()
  @Field((type) => UpdateDateColumn)
  updatedAt: string;

  @Column()
  @Field((type) => String)
  content: string;

  @ManyToOne((type) => User, (user) => user.comments)
  @Field(() => User)
  user: User;
}
