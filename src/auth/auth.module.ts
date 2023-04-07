import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { LocalStrategy } from './local strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
import { User, UserSchema } from 'src/user/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
// import { PassportStrategy } from '@nestjs/passport';

@Module({
  // imports: [PassportModule,UserModule,],
  imports: [UserModule],
  controllers: [AuthController],
  // providers: [AuthService, LocalStrategy],
  providers: [AuthService]
  // export: []
})
export class AuthModule {}
