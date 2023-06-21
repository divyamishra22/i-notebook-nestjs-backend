import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note, NoteDocument } from './note.schema';
import { Model, ObjectId } from 'mongoose';


@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<any>){}
    
   async  createnotes(title:string, desc:string,  userId:string){
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
    //  note.tag = tag;
     note.user = userId;
     return note.save();
    }

    
    async getyournote(userId:string){
      const notes= await this.noteModel.find({user:userId}).exec();
      // console.log(notes)
      return notes
    }




    findNote(id:string): Promise<Note>{
      return this.noteModel.findOne({_id:id}).exec();
    }




    async updateyournote(updatenoterequestbody,Id:string){
      const note =  await this.noteModel.findOne({_id:Id}).exec();
      if(updatenoterequestbody.title){
        note.title = updatenoterequestbody.title;
      }
      if(updatenoterequestbody.description){
        note.description = updatenoterequestbody.description;
      }
      if(updatenoterequestbody.tag){
        note.tag = updatenoterequestbody.tag;
      } 
      return note.save();
    }



    async deleteyournote( id:string){
      // const user = await this.noteModel.findOne({user: userId}).exec()
      // if()
      return await this.noteModel.deleteOne({_id:id}).exec();
    }


    async searchNote(term) {
      
    const keyword = term? {title:{
          $regex: term,
          $options:'i',
        }}: {};
      
      return this.noteModel.find({...keyword}).exec();
    }

}
