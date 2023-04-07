import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalStrategy } from './local strategy';
import { type } from 'os';
import { LocalAuthGuard } from './auth.guards';
import { User } from 'src/user/user.schema';
import { MinLength } from 'class-validator';
//  import { Request } from 'express';


class UserVerifyRequestBody{
  @ApiProperty() name: string;
  @ApiProperty()@MinLength(5) password: string;
}
 


@ApiTags('auth')
@Controller('auth')
export class AuthController {


  

  @ApiBody({ description:'verification', type: UserVerifyRequestBody})
  @UseGuards(LocalAuthGuard)
    @Post('/login')
    
     @ApiBearerAuth()
   async  logi(@Request() req):Promise<User> {

     return req.user;
    }


}
