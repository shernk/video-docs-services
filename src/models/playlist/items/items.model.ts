import { model, Schema } from "mongoose";
import { IItems } from './items.interface';

const itemsSchema = new Schema({
  title: { type: String, required: true, minlength: 2, default: "" },
  description: { type: String, required: true, minlength: 10, default: "" },
  playlistId: { type: String, required: true, minlength: 5, default: "" },
  videoId: { type: String, required: true, default: "" },
  thumbnailUrl: { type: Object, required: true, default: "" }
});
export default model<IItems>("Items", itemsSchema);

