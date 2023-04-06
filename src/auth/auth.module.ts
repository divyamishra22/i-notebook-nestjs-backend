import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local strategy';

@Module({
  imports: [LocalStrategy],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
