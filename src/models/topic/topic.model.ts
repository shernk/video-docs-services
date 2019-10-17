import { model, Schema } from "mongoose";
import  Items  from "./../../models/playlist/items/items.model";
import { ITopic } from "./topic.interface";


const TopicSchema = new Schema({
  simpleId: { type: String, required: true, minlength: 2, maxlength: 50 },
  categorySimpleId: { type: String, requried: true },
  description: { type: String, maxlength: 200, default: "" },
  label: { type: String, requried: true, maxlength: 50, minlength: 2 },
  playlistId: { type: String, required: true },
  playlist: { type: Object, required: true, default: [], ref: Items },
  videoId: { type: String, required: true, minlength: 2, maxlength: 50 }
});

export default model<ITopic>("Topic", TopicSchema);
