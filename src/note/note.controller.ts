import { Body, Controller, Post } from '@nestjs/common';
import { NoteService } from './note.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { MinLength } from 'class-validator';
import { Note } from './note.schema';


class CreateNoteBody{
    @ApiProperty() title: string;
    @ApiProperty() @MinLength(5) description: string;
    @ApiProperty()  tag: string;
}
  
@ApiTags('Notes')
@Controller('note')
export class NoteController {
    constructor(private noteService: NoteService){}
     

    @Post('/')
    async createnote(@Body()createnotebody: CreateNoteBody): Promise<Note>{
      return await this.noteService.createnotes(createnotebody.title,createnotebody.description,createnotebody.tag);
    }
}
