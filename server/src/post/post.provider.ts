import { Connection } from 'typeorm';
import { Post } from './entities/post.entity';

export const postProvider = [
  {
    provide: 'POSTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Post),
    inject: ['DATABASE_CONNECTION'],
  },
];
