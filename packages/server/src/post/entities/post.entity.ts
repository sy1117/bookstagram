import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne((type) => User, (user) => user.posts)
  @Field(() => User)
  user: User;
}
