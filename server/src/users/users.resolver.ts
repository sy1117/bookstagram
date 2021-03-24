import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { EditProfileInput, EditProfileOutput } from './dto/edit-profile.input';
import { LoginOutput } from './dto/login.dto';
import { SeeProfileOutput } from './dto/see-profile.dto';
import { UseGuards } from '@nestjs/common';
import { CreateUserInput, CreateUserOutput } from './dto/create-user.dto';
import { FollowOutput } from './dto/follow.dto';
import { GqlAuthGuard } from 'src/auth/auth.guard';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => CreateUserOutput, { name: 'createUser' })
  create(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => LoginOutput)
  login(@Args('userId') userId: string, @Args('password') password: string) {
    return this.usersService.login(userId, password);
  }

  @Query(() => User)
  async whoAmI(@AuthUser() auth: User) {
    const { user } = await this.usersService.findByUserId(auth.userId);
    console.log(user);
    return user;
  }

  @Query(() => SeeProfileOutput)
  async seeProfile(@AuthUser() user: User): Promise<SeeProfileOutput> {
    return await this.usersService.findByUserId(user.userId);
  }

  @Mutation(() => EditProfileOutput)
  editProfile(
    @AuthUser() user: User,
    @Args('editProfileInput') editProfileInput: EditProfileInput,
  ) {
    return this.usersService.update(user, editProfileInput);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => FollowOutput)
  follow(@AuthUser() user: User, userId: string) {
    return this.usersService.follow(userId);
  }
}
