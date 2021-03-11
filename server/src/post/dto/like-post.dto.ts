import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/core-output.dto';

@InputType()
export class LikePostInput {
  @Field(() => Int, { description: 'post id' })
  postId: number;
}

@ObjectType()
export class LikePostOutput extends CoreOutput {}
