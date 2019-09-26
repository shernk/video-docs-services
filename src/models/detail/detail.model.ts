import { model, Schema } from "mongoose";
import { IDetail } from "./detail.interface";

const DetailSchema = new Schema({
  categorySimpleId: { type: String, required: true },
  topicSimpleId: { type: String, required: true },
  videoId: { type: String, required: true },
  simpleId: { type: Object, required: true, max: 20, min: 2 },
  description: { type: String, maxlength: 200, default: "" },
  label: { type: String, requried: true, max: 50, min: 2, default: "" }
});

export default model<IDetail>("Detail", DetailSchema);
