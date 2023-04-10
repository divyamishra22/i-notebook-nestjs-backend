import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './note.schema';
import { Model, ObjectId } from 'mongoose';
import { throwError } from 'rxjs';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<any>){}
    
   async  createnotes(title:string, desc:string, tag:string, userId:string){
     const note = new this.noteModel();
     const findtitle =  await this.noteModel.findOne({title}).exec();
     if(!findtitle)
     note.title = title;
     else{
        throw new HttpException(
            'Tittle already exists',
            HttpStatus.BAD_REQUEST,
          );
     }
     const finddesc = await this.noteModel.findOne({desc}).exec()
     if(!finddesc){
     note.description = desc;
     }
     else{
      throw new HttpException(
        'Description already exists ',
        HttpStatus.BAD_REQUEST,
      )
     }
     note.tag = tag;
     note.user = userId;
     return note.save();
    }

    // updatenotes(title:string, desc:string, tag:string, )
}
