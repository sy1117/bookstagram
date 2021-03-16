import { InputType, Field, ObjectType, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/core-output.dto';
import { Post } from '../entities/post.entity';

@InputType()
export class LikePostInput extends PickType(Post, ['postId'], InputType) {}

@ObjectType()
export class LikePostOutput extends CoreOutput {
  @Field(() => Post)
  post: Post;
}
