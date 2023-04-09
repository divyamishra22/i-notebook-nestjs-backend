import { Body, Controller, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Note } from './note.schema';


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
     

    @Post('/')
    async createnote(@Body()createnotebody: CreateNoteBody): Promise<Note>{
      return await this.noteService.createnotes(createnotebody.title,createnotebody.description,
        createnotebody.tag,createnotebody.user);
    }
}
