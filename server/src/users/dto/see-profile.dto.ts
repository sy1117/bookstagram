import { ObjectType, Field, PickType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/core-output.dto';
import { User } from '../entities/user.entity';

@ObjectType()
export class UserOutput extends PickType(User, ['id']) {}

@ObjectType('SeeProfileOutput')
export class SeeProfileOutput extends CoreOutput {
  @Field()
  user?: UserOutput;
}
