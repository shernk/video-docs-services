import { model, Schema } from "mongoose";
import { IDetail } from "./detail.interface";

const DetailSchema = new Schema({
  simpleId: { type: Object, required: true, max: 20, min: 2 },
  label: { type: String, requried: true, max: 50, min: 2, default: "" },
  description: { type: String, maxlength: 200, default: "" }
});

export default model<IDetail>("Detail", DetailSchema);
