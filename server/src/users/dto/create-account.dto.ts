import { InputType, Int, Field, PickType, ObjectType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { CoreOutput } from 'src/common/core-output.dto';

@InputType('CreateAccountInput')
export class CreateAccountInput extends PickType(
  User,
  ['id', 'password'],
  InputType,
) {}

@ObjectType('CreateAccountOutput')
export class CreateAccountOutput extends CoreOutput {
  @Field(() => User)
  user?: User;
}
