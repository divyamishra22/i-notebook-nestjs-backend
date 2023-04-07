import { Body, Controller, Get, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { LocalStrategy } from './local strategy';
// import { LocalAuthGuard } from './auth.guards';
import { User } from 'src/user/user.schema';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { AuthService } from './auth.service';
//  import { Request } from 'express';


class UserVerifyRequestBody{
  @ApiProperty()@MinLength(5) @IsString() password: string;
   @ApiProperty() @IsString()  email: string;
}
 


@ApiTags('auth')
@Controller('auth')
export class AuthController {
constructor(private readonly authService: AuthService){}

  

  // @ApiBody({ description:'verification', type: UserVerifyRequestBody})
  // @UseGuards(AuthGuard('local'))
  //   @Post('/login')
    
  //   //  @ApiBearerAuth()
  //  async  login(@Request() req):Promise<User> {

  //    return req.user;
  //   }

  

    @Post('/login')
     async login(@Body()userverifyrequest: UserVerifyRequestBody): Promise<any>{
      const user = await this.authService.login(userverifyrequest.email, userverifyrequest.password);
      return user;
     }
}
