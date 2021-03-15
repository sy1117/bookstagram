import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'UserName' })
  userName: string;

  @Field(() => String, { description: 'Password' })
  password: string;
}
