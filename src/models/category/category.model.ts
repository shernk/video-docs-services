import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

const CategorySchema = new Schema({
  simpleId: { type: Object, required: true, max: 20, min: 2 },
  label: { type: String, requried: true, max: 50, min: 2, default: "" },

  /*
   TODO: watch again
   * Ep29
   * Time: 29:21
   ! didnt display playlist's item[{videoID, desciption, title, thumnailUrl}]
   */
  playlist: { type: Object, required: false },

  playlistId: { type: String, required: true, default: [] },
  description: { type: String, maxlength: 200, default: "" },
  books: { type: Array, required: false, default: [] },
  courses: { type: Array, required: false, default: [] },
  topics: [{ type: Object, required: false, default: [] }]
});

export default model<ICategory>("Category", CategorySchema);
