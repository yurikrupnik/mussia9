import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { User } from "@mussia9/shared/data-types";

import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({})
  password: string;

  @Prop()
  image: string;

  @Prop()
  _id: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/mussia9")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
