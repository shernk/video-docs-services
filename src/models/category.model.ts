import { model, Schema } from "mongoose";

const CategorySchema = new Schema({
  category: { type: String, requried: true, max: 50, min: 2 }
});

export default model("Category", CategorySchema);
