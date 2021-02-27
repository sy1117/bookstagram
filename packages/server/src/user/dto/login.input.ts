import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @Field(() => String)
  userName: string;

  @Field(() => String)
  password: string;
}
