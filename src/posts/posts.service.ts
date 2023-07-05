import { Injectable } from '@nestjs/common';
import { PostType } from './post.interface';

@Injectable()
export class PostsService {
  posts: PostType[] = [];

  findAll() {
    return this.posts;
  }
}
