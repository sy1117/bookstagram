import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as passport from 'passport';
import * as expressSession from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    expressSession({
      resave: true,
      secret: 'teststest',
      saveUninitialized: true,
    }),
  );
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3001);
}
bootstrap();
