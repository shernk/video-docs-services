import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

const CategorySchema = new Schema({
  simpleId: { type: String, required: true, max: 20, min: 2 },
  label: { type: String, requried: true, max: 50, min: 2, default: "" },

  description: { type: String, maxlength: 200, default: "" },
  playlist: { type: Object, required: true, default: [] },
  playlistId: { type: String, required: false },
  books: { type: Array, required: true, default: [] },
  courses: { type: Array, required: true, default: [] },
  topics: [{ type: Object, required: true, default: [] }]
});

export default model<ICategory>("Category", CategorySchema);
