import { Req, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard) // 1
  @Mutation(() => User)
  async login(@Args('loginInput') { userName, password }: LoginInput) {
    return this.authService.validateUser(userName, password);
  }
}
