import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @Column()
  followerId: number;

  @Column()
  followeeId: number;
}
