import { ObjectType, Field } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/core-output.dto';

@ObjectType('LoginOutput')
export class LoginOutput extends CoreOutput {
  @Field()
  token?: string;
}
