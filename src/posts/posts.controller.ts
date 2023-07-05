import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  // 記事の投稿を全て取得
  findAll() {
    return 'get all posts';
  }
}
