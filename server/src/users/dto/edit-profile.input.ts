import {
  InputType,
  PickType,
  PartialType,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { CoreOutput } from 'src/common/core-output.dto';
import { User } from '../entities/user.entity';
import { UserOutput } from './see-profile.dto';

@InputType()
export class EditProfileInput extends PartialType(
  PickType(User, ['password'], InputType),
) {}

@ObjectType()
export class EditProfileOutput extends CoreOutput {
  @Field({ nullable: true })
  user?: UserOutput;
}
