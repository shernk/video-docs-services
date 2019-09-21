import mongoose from "mongoose";
import { ITopic } from "../topic/topic.interface";
import { Book } from './book.interface';
import { Course } from "./course.interface";
import { Playlist } from './playlist.model';

export interface ICategory extends mongoose.Document {
  description: string;
  label: string;
  simpleId: string;
  playlistId: string;
  playlist?: Playlist;
  books: Book[];
  courses: Course[];
  topics: ITopic[];
}
