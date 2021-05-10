import { Module, Global } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Follow } from './entities/follow.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Follow])],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
