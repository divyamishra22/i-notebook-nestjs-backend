import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalStrategy } from './local strategy';
import { type } from 'os';
import { LocalAuthGuard } from './auth.guards';
import { User } from 'src/user/user.schema';

class UserVerifyRequestBody{
  @ApiProperty() name: string;
  @ApiProperty() password: string;
}
 


@ApiTags('auth')
@Controller('auth')
export class AuthController {
   constructor(private uservalidate: LocalStrategy){}
    // @ApiResponse({ type: string })
    @Post('/login')
    @UseGuards(LocalAuthGuard)
   async  login(@Body() verifyuser:UserVerifyRequestBody):Promise<any> {

     const usercheck =  await this.uservalidate.validate(verifyuser.name, verifyuser.password);
     if(usercheck)
     return 'login sucessfull';
    }

  //   @Post('/login')
  //   @UseGuards(LocalAuthGuard)
  //  async  login(@Request() req):Promise<User> {

  //    return  req.user;
  //   }

}
