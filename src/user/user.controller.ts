import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
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
   async create(@Body() usercreaterequestbody: UserCreateRequestBody){
        return await this.userService.create(usercreaterequestbody);
    }

    @Get('/user')
   async findall(): Promise<User[]>{
        return await this.userService.findall();
    }
    @Get('/id')
    async find(@Param('id') id: string): Promise<User>{
        return await this.userService.findOne(id);
    }


    @Get('/username')
    async getusername(@Param('username') username:string){
        return await this.userService.getusername(username);
    }

    @Delete('/id')
    async remove(@Param('id')id: string){
    return await this.userService.remove(id);
    }

}
