import mongoose from "mongoose";

export interface IDetail extends mongoose.Document {
  description: string;
  label: string;
  simpleId: string;
}
