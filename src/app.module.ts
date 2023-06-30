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
import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ProdDbModule } from './db.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://divya:divya123@127.0.0.1:27017/mydb1',
      'mongodb+srv://divyaa:divyaa@cluster0.nkr9gtp.mongodb.net/mydb1?retryWrites=true&w=majority'
   
     
      
    ),
    UserModule,
    NoteModule,
    AuthModule,
    // ProdDbModule
  ],
//   imports:[
//      MongooseModule.forRootAsync({
//     imports: [ConfigModule],
//     useFactory: async (configService: ConfigService) => ({
//       uri: configService.get<string>('MONGODB_URI'),
//     }),
//     inject: [ConfigService],
//   })
// ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
