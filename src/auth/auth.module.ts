import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { LocalStrategy } from './local strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwtguard';
import { JwtStrategy } from './guards/jwt strategy';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from './constants';





@Module({
  // imports: [PassportModule,UserModule,],
  imports: [UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '10days' },
    }),

],
  controllers: [AuthController],
  // providers: [AuthService,JwtGuard, JwtStrategy ],
  providers: [AuthService,JwtStrategy],
   exports: [AuthService,]
})
export class AuthModule {}
