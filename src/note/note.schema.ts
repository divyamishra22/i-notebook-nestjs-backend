import {Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
// import { Schema } from "mongoose";
import mongoose, { Document, ObjectId, Types,   } from "mongoose";
import { User } from "src/user/user.schema";



export type NoteDocument = Note & Document;
@Schema()
export class Note {

  //  @ApiProperty()
  // // @Prop({type: Types.ObjectId})
  // // _id: Types.ObjectId;
  // _id: mongoose.Types.ObjectId;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user:  Types.ObjectId;

  
  @ApiProperty()
  @Prop({required:true , 
    // unique: true
  })
  title: string;

  
  @Prop({required:true ,
    //  unique:true
     })
  description: string;

  
  // @Prop({required:true})
  // tag: string;

  
  @Prop({ optional: true})
  date:  Date;


}
export const NoteSchema = SchemaFactory.createForClass(Note);