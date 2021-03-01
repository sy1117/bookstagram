import { Field, InputType, PickType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@InputType()
export class LoginInput extends PickType(User, ['userName', 'password']) {
  @Field()
  userName: string;

  @Field()
  password: string;
}
