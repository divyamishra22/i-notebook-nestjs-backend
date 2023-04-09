import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Note } from './note.schema';
import { JwtGuard } from 'src/auth/guards/jwtguard';


class CreateNoteBody{
    @ApiProperty() @IsString() @MinLength(3) title: string;
    @ApiProperty() @MinLength(5) description: string;
    @ApiProperty() @IsString() @MinLength(1)  tag: string;
    @ApiProperty()  @IsString() user: string;
}
  
@ApiTags('Notes')
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}
     
    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Post('/')
    async createnote(@Body()createnotebody: CreateNoteBody): Promise<Note>{
      return await this.noteService.createnotes(createnotebody.title,createnotebody.description,
        createnotebody.tag,createnotebody.user);
    }
}
