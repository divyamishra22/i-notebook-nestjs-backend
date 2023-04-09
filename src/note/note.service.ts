import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './note.schema';
import { Model } from 'mongoose';
import { throwError } from 'rxjs';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<any>){}
    
   async  createnotes(title:string, desc:string, tag:string, user:string){
     const note = new this.noteModel();
     const findtitle =  await this.noteModel.find({title});
     if(!findtitle)
     note.title = title;
     else{
        throw new HttpException(
            'Tittle already exists',
            HttpStatus.BAD_REQUEST,
          );
     }
     note.description = desc;
     note.tag = tag;
     note.id = user;
     return note.save();
    }

    // updatenotes(title:string, desc:string, tag:string, )
}
