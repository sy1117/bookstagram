import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const user: User = gqlContext.req.user;
    if (!user) {
      throw new UnauthorizedException();
    }
    return true;
  }
}

// @Injectable()
// export class GqlAuthGuard extends AuthGuard('jwt') {
//   getRequest(context: ExecutionContext) {
//     const gqlContext = GqlExecutionContext.create(context).getContext();
//     const user: User = gqlContext.req.user;
//     console.log('gesss', gqlContext.req.user);
//     if (!user) {
//       throw new UnauthorizedException();
//       return false;
//     }
//     return true;
//   }
// }
