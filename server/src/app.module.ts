import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlExecutionContext, GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    PostModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/_generated/schema.gql'),
      // sortSchema: true,
    }),
  ],
  controllers: [],
  providers: [AppController, AppService],
})
export class AppModule { }
