import { ObjectID } from "bson";
import { model, Schema } from "mongoose";
import { ITopic } from "./topic.interface";

const TopicSchema = new Schema({
  categoryId: { type: String, requried: true },
  label: { type: String, requried: true, maxlength: 50, minlength: 2 },
  description: { type: String, maxlength: 200, default: "" }
});

export default model<ITopic>("Topic", TopicSchema);
