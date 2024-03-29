import mongoose from "mongoose";
import { Book } from "../book/book.interface";
import { Course } from "../course/course.interface";
import { Playlist } from '../playlist/playlist.model';
import { ITopic } from "../topic/topic.interface";

export interface ICategory extends mongoose.Document {
  simpleId: string;
  label: string;
  description: string;
  playlistId: string;
  playlist: Playlist;
  books: Book[];
  courses: Course[];
  topics: ITopic[];
}
