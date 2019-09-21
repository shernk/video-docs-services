import mongoose from "mongoose";

export interface ITopic extends mongoose.Document {
  description: string;
  label: string;
  categoryId: string;
}
