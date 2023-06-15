import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiProperty, ApiTags, PartialType } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.schema';
import { IsEmail, IsString, MinLength } from 'class-validator';
import { JwtGuard } from 'src/auth/guards/jwtguard';
import { getUserbyId } from 'src/auth/auth.decorator';


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

    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Get('/allusers')
   async findall(): Promise<User[]>{
        return await this.userService.findall();
    }

    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Get('/id')
    async find(@Param('id') id: string): Promise<User>{
        return await this.userService.findOne(id);
    }


    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Get('/username')
    async getusername(@Param('username') username:string){
        return await this.userService.getusername(username);
    }

    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Patch('/id')
    async updateuserdetails( @getUserbyId() userId: string ,@Body() userupdaterequestbody: UserUpdateRequestBody){
        return await this.userService.updateuserdetails(userId, userupdaterequestbody);
    }


    @ApiBearerAuth()
    @UseGuards(JwtGuard) 
    @Delete('/id')
    async remove(@getUserbyId() userid: string){
    return await this.userService.remove(userid);
    }
   
}
