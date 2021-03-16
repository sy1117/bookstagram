import { InputType, PickType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType('CreatePostInput', { isAbstract: true })
export class CreatePostInput extends PickType(
  Post,
  ['bookName', 'content', 'bookImageURL'],
  InputType,
) {}
