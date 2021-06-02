import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  CanActivate,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from 'src/jwt/jwt.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const gqlContext = GqlExecutionContext.create(context).getContext();
    const { token } = gqlContext;
    if (!token) return false;

    const decode: any = this.jwtService.verify(token.toString());
    const user = await this.usersService.findOne({
      userId: decode.userId,
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    context['user'] = user;
    gqlContext['user'] = user;
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
