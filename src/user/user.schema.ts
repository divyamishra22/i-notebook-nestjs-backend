import {Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";
import mongoose, { Document, Types } from "mongoose";
import { type } from "os";
import { Note } from "src/note/note.schema";
// import { Schema } from "mongoose";
// import { HydratedDocument } from 'mongoose';

 export type UserDocument = User & Document;

@Schema()
export class User {

  // @Prop({type: [Types.ObjectId], ref: Note.name})
  // notes: Note[];

  @ApiProperty()
  @Prop({required:true})
  name: string;

  @ApiProperty()
  @MinLength(5)
  @Prop({required: true,})
  password: string;

  @ApiProperty()
  @IsEmail()
  @Prop({ required: true, unique: true,})
  email: string;
  
  @ApiProperty()
  @Prop({optional: true})
  date: Date;

}
export const UserSchema = SchemaFactory.createForClass(User);
