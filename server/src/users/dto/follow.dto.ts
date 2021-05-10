import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/core-output.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class FollowOutput extends CoreOutput {
  @Field()
  follower?: User;
  @Field()
  following?: User;
}
