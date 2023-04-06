import {Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";
// import { Schema } from "mongoose";
// import { HydratedDocument } from 'mongoose';

 export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty()
  @Prop({required:true})
  name: string;

  @ApiProperty()
  @Prop({required: true})
  password: string;

  @ApiProperty()
  @Prop({ required: true, unique: true})
  email: string;
  
  @ApiProperty()
  @Prop({optional: true})
  date: Date;

}
export const UserSchema = SchemaFactory.createForClass(User);
