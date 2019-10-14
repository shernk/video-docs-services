import mongoose from "mongoose";

export interface IItems extends mongoose.Document {
  readonly videoId: string;
  readonly playlistId: string;
  description: string;
  title: string;
  thumbnailUrl: object;
}
