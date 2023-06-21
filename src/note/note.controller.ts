import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Request, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiBearerAuth, ApiProperty, ApiPropertyOptional, ApiSecurity, ApiTags, PartialType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Note } from './note.schema';
import { JwtGuard } from 'src/auth/guards/jwtguard';
import { getUserbyId } from 'src/auth/auth.decorator';



class CreateNoteBody{
    @ApiProperty() 
    // @IsString()  
    title: string;
    @ApiProperty() 
    // @MinLength(5)
     description: string;
    // @ApiPropertyOptional() @IsString()  tag: string;
    
}

class UpdateNoteRequestBody extends PartialType(CreateNoteBody){}
  
@ApiTags('Notes')
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}
    
     
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Post('/createyournote')
    async createnote(@Body()createnotebody: CreateNoteBody , @getUserbyId()userId:string): Promise<Note>{
      return await this.noteService.createnotes(createnotebody.title,createnotebody.description,
         userId);
    }

    
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Get('/post')
    post(@Request() req:any): any{
      
        // console.log('post() controller', req.user);
    return "hi " + JSON.stringify(req.user);
    }
    

    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Put('/:id')
    async find(@Param('id') id: string): Promise<Note>{
        return await this.noteService.findNote(id);
    }




    @UseGuards(JwtGuard)
    @ApiBearerAuth()
   @Get('/getyournote')
   async getyournote(@getUserbyId() userId:string): Promise<Note[]>{
       return await this.noteService.getyournote(userId);
   }



    @Get('/search/:term')
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  searchNote(@Param('term') term: string) {
    return this.noteService.searchNote(term);
  }



    
   
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Delete('/deleteyournote/:id')
    async deleteyournote( @Param('id') id: string){
        return await this.noteService.deleteyournote(id);
    }
  
    
    
    @UseGuards(JwtGuard)
    @ApiBearerAuth()
    @Patch('/updateyournote/:id')
     updateyournote( @Param('id') id: string, @Body() updatenoterequestbody:UpdateNoteRequestBody,@getUserbyId() userId: string){
        const upnote  = this.noteService.updateyournote(updatenoterequestbody, id);
        return{
            upnote
        }
    }
}
