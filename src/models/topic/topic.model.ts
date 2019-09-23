import { ObjectID } from "bson";
import { model, Schema } from "mongoose";
import { ITopic } from "./topic.interface";

const TopicSchema = new Schema({
  categoryId: { type: String, requried: true },
  description: { type: String, maxlength: 200, default: "" },
  label: { type: String, requried: true, maxlength: 50, minlength: 2 },
  simpleId: { type: String, required: true, minlength: 2, maxlength: 50 }
});

export default model<ITopic>("Topic", TopicSchema);
