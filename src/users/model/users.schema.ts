import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ lowercase: true, trim: true, unique: true  })
  email: string;

  @Prop()
  birthDate: Date;

  @Prop()
  gender: boolean; // 0: female; 1: male

  @Prop()
  password: string;

  @Prop()
  bio: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  avatar: string;

  @Prop()
  background: string;

  @Prop()
  role: Types.ObjectId;

  @Prop()
  followers: Types.ObjectId[];

  @Prop()
  followings: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User)