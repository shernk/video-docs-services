import mongoose from "mongoose";
import { Playlist } from './playlist.model';

export interface ICategory extends mongoose.Document {
  description: string;
  label: string;
  simpleId: string;
  playlistId: string;
  playlist?: Playlist;
}
