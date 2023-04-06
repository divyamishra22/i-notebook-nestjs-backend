import { Module } from '@nestjs/common';
import { User, UserSchema } from './user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LocalStrategy } from 'src/auth/local strategy';

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema }]),
        
      ],
      controllers: [UserController],
      providers: [UserService],
       exports: [UserService]
})
export class UserModule {}
