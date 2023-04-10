import { Body, Controller, Delete, Get, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiBearerAuth, ApiProperty, ApiSecurity, ApiTags, PartialType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Note } from './note.schema';
import { JwtGuard } from 'src/auth/guards/jwtguard';
import { getUserbyId } from 'src/auth/auth.decorator';



class CreateNoteBody{
    @ApiProperty() @IsString() @MinLength(3) title: string;
    @ApiProperty() @MinLength(5) description: string;
    @ApiProperty() @IsString() @MinLength(1)  tag: string;
    
}

class UpdateNoteRequestBody extends PartialType(CreateNoteBody){}
  
@ApiTags('Notes')
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}
    
     
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    //   @ApiSecurity('JWT')
    @Post('/createyournote')
    async createnote(@Body()createnotebody: CreateNoteBody , @getUserbyId()userId:string): Promise<Note>{
      return await this.noteService.createnotes(createnotebody.title,createnotebody.description,
        createnotebody.tag, userId);
    }

    
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    //  @ApiSecurity('JWT')
    @Get('/post')
    post(@Request() req:any): any{
      
        // console.log('post() controller', req.user);
    return "hi " + JSON.stringify(req.user);
    }
    

    // @ApiSecurity('JWT')
    
     @UseGuards(JwtGuard)
     @ApiBearerAuth()
    @Get('/getyournote')
    async getyournote(@getUserbyId() userId:string): Promise<Note[]>{
        return await this.noteService.getyournote(userId);
    }


    // @ApiSecurity('JWT')
   
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Delete('/deleteyournote')
    async deleteyournote(@getUserbyId() userId:string){
        return await this.noteService.deleteyournote(userId);
    }
  
    // @ApiSecurity('JWT')
    
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Patch('/updateyournote')
    async updateyournote(@Body() updatenoterequestbody:UpdateNoteRequestBody,@getUserbyId() userId: string){
        return await this.noteService.updateyournote(updatenoterequestbody, userId);
    }
}
