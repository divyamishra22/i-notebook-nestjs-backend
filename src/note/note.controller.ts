import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiBearerAuth, ApiProperty, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Note } from './note.schema';
import { JwtGuard } from 'src/auth/guards/jwtguard';
import { getUserbyId } from 'src/auth/auth.decorator';



class CreateNoteBody{
    @ApiProperty() @IsString() @MinLength(3) title: string;
    @ApiProperty() @MinLength(5) description: string;
    @ApiProperty() @IsString() @MinLength(1)  tag: string;
    
}
  
@ApiTags('Notes')
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}
    
      

    
    // @ApiBearerAuth()
    @UseGuards(JwtGuard)
    //   @ApiSecurity('JWT')
    @Post('/')
    async createnote(@Body()createnotebody: CreateNoteBody , @getUserbyId()userId:string): Promise<Note>{
      return await this.noteService.createnotes(createnotebody.title,createnotebody.description,
        createnotebody.tag, userId);
    }

    // @ApiBearerAuth()
    @UseGuards(JwtGuard)
    // @ApiSecurity('JWT')
    @Get('/post')
    post(@Request() req:any): any{
        // return " hii "+ JSON.stringify(req.userid);
        console.log('post() controller', req.user);
    return "hi " + JSON.stringify(req.user);
    }
    

}
