import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
  description: { type: String, maxlength: 200, default: "" },
  label: { type: String, requried: true, max: 50, min: 2 }
});

export default model("Category", CategorySchema);
