import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { postProvider } from './post.provider';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [...postProvider, PostResolver, PostService],
})
export class PostModule {}
