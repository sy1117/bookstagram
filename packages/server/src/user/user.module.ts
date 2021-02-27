import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider, UserResolver, UserService],
})
export class UserModule {}
