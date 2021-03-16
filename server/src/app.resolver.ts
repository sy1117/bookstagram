import { Req, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';
import { GqlAuthGuard } from './auth/auth.guard';
import { User } from './users/entities/user.entity';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  async login(
    @Req() req,
    @Args('userName') userName: string,
    @Args('password') password: string,
  ) {
    return req.user;
  }
}
