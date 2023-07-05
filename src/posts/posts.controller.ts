import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  // 記事の投稿を全て取得
  findAll() {
    return this.postsService.findAll();
  }
}
