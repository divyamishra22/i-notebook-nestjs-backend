import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.schema';
import { IsEmail, IsString, MinLength } from 'class-validator';


class UserCreateRequestBody{
    @ApiProperty()  @IsString() name: string;
    @ApiProperty() @IsString() @MinLength(5) password: string;
    @ApiProperty() @IsString() @IsEmail() email: string;
}
   
class UserUpdateRequestBody extends PartialType(UserCreateRequestBody){}



@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    
    @Post('/signup')
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

    @Patch('/id')
    async updateuserdetails( @Param() userId: string ,@Body() userupdaterequestbody: UserUpdateRequestBody){
        return await this.userService.updateuserdetails(userId, userupdaterequestbody);
    }


     
    @Delete('/id')
    async remove(@Param('id')id: string){
    return await this.userService.remove(id);
    }
   
}
