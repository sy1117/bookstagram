import { Field, InputType, PickType } from '@nestjs/graphql';
import { Comment } from '../entities/comment.entity';

@InputType('CreateCommentInput', { isAbstract: true })
export class CreateCommentInput extends PickType(
  Comment,
  ['content'],
  InputType,
) {
  @Field()
  postId: number;
}
