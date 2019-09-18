import { model, Schema } from "mongoose";
import { ICategory } from "./category/category.interface";

const CategorySchema = new Schema({
  simpleId: { type: Object, required: true, max: 20, min: 2 },
  label: { type: String, requried: true, max: 50, min: 2, default: "" },
  playlist: { type: Object, required: false },
  playlistId: { type: String, required: true },
  description: { type: String, maxlength: 200, default: "" },
  books: { type: Array, required: false, default: [] },
  courses: { type: Array, required: false, default: [] }
});

export default model<ICategory>("Category", CategorySchema);
