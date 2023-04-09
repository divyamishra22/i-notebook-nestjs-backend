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
    JwtModule.registerAsync({
      useFactory: () =>({
      secret: 'divya123',
      signOptions: { expiresIn: '60s' },
    }),
})
],
  controllers: [AuthController],
  // providers: [AuthService, LocalStrategy],
  providers: [AuthService,JwtGuard, JwtStrategy]
  // export: []
})
export class AuthModule {}
