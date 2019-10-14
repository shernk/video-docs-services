import { model, Schema } from "mongoose";
import { IDetail } from "./detail.interface";

const DetailSchema = new Schema({
  label: { type: String, requried: true, max: 50, min: 2, default: "" },
  description: { type: String, maxlength: 200, default: "" },
  simpleId: { type: String, required: true, max: 20, min: 2 },
  categorySimpleId: { type: String, required: true },
  topicsSimpleId: { type: String, required: true },
  videoId: { type: String, required: true },
});

export default model<IDetail>("Detail", DetailSchema);
