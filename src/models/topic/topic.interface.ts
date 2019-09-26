import mongoose from "mongoose";
import { Playlist } from './../playlist/playlist.model';

export interface ITopic extends mongoose.Document {
  categorySimpleId: string;
  description: string;
  label: string;
  playlistId: string;
  playlist: Playlist;
  simpleId: string;
  videoId: string;
}
