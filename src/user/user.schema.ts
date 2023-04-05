import {Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
// import { Schema } from "mongoose";
// import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required:true})
  name: string;

  @Prop({required: true})
  password: string;

  @Prop({ required: true, unique: true})
  email: string;

  @Prop({optional: true})
  date: Date;

}
export const UserSchema = SchemaFactory.createForClass(User);
