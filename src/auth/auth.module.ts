import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { LocalStrategy } from './local strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';



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
  providers: [AuthService]
  // export: []
})
export class AuthModule {}
