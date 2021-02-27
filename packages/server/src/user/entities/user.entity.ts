import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column(() => String)
  @Field((type) => String)
  userName: string;

  @Column(() => String)
  @Field((type) => String)
  password: string;
}
