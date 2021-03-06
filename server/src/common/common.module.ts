import { Global, Module } from '@nestjs/common';
import { PubSub } from 'apollo-server-express';
import { PUB_SUB } from './common.constant';

@Global()
@Module({
  providers: [{ provide: PUB_SUB, useValue: new PubSub() }],
  exports: [PUB_SUB],
})
export class CommonModule {}
