import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';
// import { PassportStrategy } from '@nestjs/passport';

@Module({
  imports: [PassportModule,UserModule,],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy,],
  // export: []
})
export class AuthModule {}
