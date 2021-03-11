import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { userProvider } from './user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userProvider, UserService],
  exports: [...userProvider, DatabaseModule, UserService],
})
export class UserModule {}
