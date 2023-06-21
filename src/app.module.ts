import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { ProdDbModule } from './db.module';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://divya:divya123@127.0.0.1:27017/mydb1',
      
    ),
    UserModule,
    NoteModule,
    AuthModule,
    // ProdDbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
