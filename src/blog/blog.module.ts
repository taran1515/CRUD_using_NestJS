import {Module} from '@nestjs/common';

import {BlogsController} from './blog.controller';
import {BlogsService} from './blog.service';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService],
  exports: [BlogsService]
})
export class BlogsModule {}