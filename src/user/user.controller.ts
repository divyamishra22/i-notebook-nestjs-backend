import { Body, Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.schema';


class UserCreateRequestBody{
    @ApiProperty() name: string;
    @ApiProperty() password: string;
    @ApiProperty() email: string;
}
    

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/')
//CreateUser(@Param('username') username: string):string{
   // return `User of ${username} created`;
 async createNewUser(@Body() createUserRequest: UserCreateRequestBody): Promise<User>{         
 const  user = await this.userService.createUser(createUserRequest);
  return user;                                                     
   }
}
