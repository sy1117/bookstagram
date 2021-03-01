import {
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PassportStrategy } from '@nestjs/passport';
import { AuthenticationError } from 'apollo-server-express';
import { AuthService } from './auth.service';
// import { Observable } from 'rxjs';
// import { User } from 'src/user/entities/user.entity';
import { LocalStrategy } from './local.strategy';

@Injectable()
export class AuthGuard extends PassportStrategy(LocalStrategy) {
  async canActivate(context: ExecutionContext) {
    return true;
    // super.canActivate(context);
  }
}
