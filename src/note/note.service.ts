import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './note.schema';
import { Model } from 'mongoose';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>){}
    
    createnotes(title:string, desc:string, tag:string, user:string){
     const note = new this.noteModel();
     note.title = title;
     note.description = desc;
     note.tag = tag;
     note.id = user;
     return note.save();
    }

    // updatenotes(title:string, desc:string, tag:string, )
}
