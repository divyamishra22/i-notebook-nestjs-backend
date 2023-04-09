import {Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
// import { Schema } from "mongoose";
import mongoose, { Document,   } from "mongoose";


export type NoteDocument = Note & Document;
@Schema()
export class Note {

   @ApiProperty()
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

  // @ApiProperty()
  // @Prop({required: true})
  // id: string;

  @ApiProperty()
  @Prop({required:true})
  title: string;

  
  @Prop({required:true })
  description: string;

  
  @Prop({required:true})
  tag: string;

  
  @Prop({ optional: true})
  date:  Date;


}
export const NoteSchema = SchemaFactory.createForClass(Note);