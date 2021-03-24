import { Post } from 'src/post/entities/post.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => User, (user) => user.likes)
  @JoinColumn({ name: 'userId' })
  @Column()
  user: User;

  @ManyToOne((type) => Post, (post) => post.likes)
  @Column()
  postId: number;
}
