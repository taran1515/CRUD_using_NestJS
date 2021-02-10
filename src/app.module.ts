import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';


import { BlogsController } from './blog/blog.controller'
import { BlogsService} from './blog/blog.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'taran@123',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController,BlogsController],
  providers: [AppService,BlogsService],
})
export class AppModule {}
