import { Body, Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';


class UserCreateRequestBody{
    @ApiProperty() username: string;
    @ApiProperty() password: string;
    @ApiProperty() email: string;
}
    

@ApiTags('Users')
@Controller('user')
export class UserController {

    @Post('/')
//CreateUser(@Param('username') username: string):string{
   // return `User of ${username} created`;
async createNewUser(@Body() createUserRequest: UserCreateRequestBody): Promise<any>{         
  
  return 'user';                                                     
   }
}
