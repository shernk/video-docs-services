import { model, Schema } from "mongoose";
import { ICategory } from './category/category.interface';
import { Playlist } from './category/playlist.model';

const CategorySchema = new Schema({
  description: { type: String, maxlength: 200, default: "" },
  label: { type: String, requried: true, max: 50, min: 2 },
  playlist: { type: Object, required: false },
  playlistId: { type: String, required: true }
});

export default model<ICategory>("Category", CategorySchema);
