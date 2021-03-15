import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';

@Resolver()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('local'))
  @Mutation(() => User)
  async login(
    @Req() req,
    @Args('userName') userName: string,
    @Args('password') password: string,
  ) {
    console.log(req);
    return req.user;
  }
}
