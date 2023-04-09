import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { LocalStrategy } from './local strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from './guards/jwtguard';
import { JwtStrategy } from './guards/jwt strategy';




@Module({
  // imports: [PassportModule,UserModule,],
  imports: [UserModule,
    JwtModule.register({
      secret: 'divya123',
      signOptions: { expiresIn: '10days' },
    }),

],
  controllers: [AuthController],
  // providers: [AuthService, JwtStrategy],
  providers: [AuthService,JwtGuard, JwtStrategy ],
   exports: [AuthService, JwtStrategy]
})
export class AuthModule {}
