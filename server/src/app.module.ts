import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { JwtMiddleware } from './jwt/jwt.middleware';
import { JwtModule } from './jwt/jwt.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { Like } from './post/entities/like.entity';
import { Comment } from './post/entities/comment.entity';
import { AppResolver } from './app.resolver';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PostModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'soyoung',
      port: 5432,
      database: 'bookstagram',
      synchronize: true,
      entities: [User, Like, Post, Comment],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/__generated__/schema.gql'),
      introspection: true,
      installSubscriptionHandlers: true,
      context: async ({ req, connection }) => {
        const TOKEN_KEY = 'x-jwt';
        return {
          token: connection
            ? connection.context[TOKEN_KEY]
            : req.headers[TOKEN_KEY],
        };
      },
    }),
    JwtModule.forRoot({
      privateKey: 'test-private-key',
    }),
    CommonModule,
  ],
  providers: [AppResolver, AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(JwtMiddleware).forRoutes({
//       path: '/graphql',
//       method: RequestMethod.ALL,
//     });
//   }
// }
