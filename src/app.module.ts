import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://divya:divya123@127.0.0.1:27017/mydb1',
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
