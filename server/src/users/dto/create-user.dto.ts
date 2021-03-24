import { InputType, Field, PickType, ObjectType } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { CoreOutput } from 'src/common/core-output.dto';

@InputType('CreateUserInput')
export class CreateUserInput extends PickType(
  User,
  ['userId', 'password'],
  InputType,
) {}

@ObjectType('CreateUserOutput')
export class CreateUserOutput extends CoreOutput {
  @Field(() => User, { nullable: true })
  user?: User;
}
