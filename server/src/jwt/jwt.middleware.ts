import { NestMiddleware, Injectable } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { JwtService } from './jwt.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if ('x-jwt' in req.headers && req.headers['x-jwt']) {
      const token = req.headers['x-jwt'];
      const decode: any = this.jwtService.verify(token.toString());
      if (typeof decode === 'object' && decode.hasOwnProperty('userId')) {
        try {
          const user = await this.usersService.findOne({
            userId: decode.userId,
          });
          if (user) {
            req['user'] = user;
          }
        } catch (error) {}
      }
    }
    next();
  }
}
