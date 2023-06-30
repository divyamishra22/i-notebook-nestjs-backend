import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';


// import { ProdDbModule } from './db.module';


require('dotenv').config();

@Module({
  imports: [
   
    MongooseModule.forRoot(
      // 'mongodb://divya:divya123@127.0.0.1:27017/mydb1',
      //  'mongodb+srv://divyaa:divyaa@cluster0.nkr9gtp.mongodb.net/mydb1?retryWrites=true&w=majority'
     
        process.env.MONGODB_URI,
      
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
