import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(userName: string, password: string): Promise<any> {
    const user = await this.userService.findByUserName(userName);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
