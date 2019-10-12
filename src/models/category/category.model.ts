import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

/*
 TODO: watch again
 * Ep29
 * Time: 29:21
 ! didnt display playlist's item[{videoID, desciption, title, thumnailUrl}]
 */
const CategorySchema = new Schema({
  simpleId: { type: Object, required: false, max: 20, min: 2 },
  label: { type: String, requried: false, max: 50, min: 2, default: "" },

  description: { type: String, maxlength: 200, default: "" },
  playlist: { type: Object, required: false, default: []  },
  playlistId: { type: String, required: false},
  books: { type: Array, required: false, default: [] },
  courses: { type: Array, required: false, default: [] },
  topics: [{ type: Object, required: false, default: [] }]
});

export default model<ICategory>("Category", CategorySchema);
