import {Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
// import { Schema } from "mongoose";
// import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;

@Schema()
export class Note {
  @Prop({required:true})
  title: string;

  @Prop({required:true , unique:true})
  description: string;

  @Prop({required:true})
  tag: string;

  @Prop({ default:Date.now })
  date = Date;


}
export const NoteSchema = SchemaFactory.createForClass(Note);