import { PassportSerializer } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
    console.log('session');
  }

  serializeUser(user: any, done: CallableFunction): any {
    console.log('serializeUser');
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    try {
      const user = await this.userService.findByUserName(userId);
      if (!user) done(new NotFoundException(), null);
      else done(null, user);
    } catch (err) {
      done(err);
    }
  }
}
