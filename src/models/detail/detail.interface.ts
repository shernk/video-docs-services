import mongoose from "mongoose";

export interface IDetail extends mongoose.Document {
  categorySimpleId: string;
  topicSimpleId: string;
  videoId: string;
  simpleId: string;
  description: string;
  label: string;
}
