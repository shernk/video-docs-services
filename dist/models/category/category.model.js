"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    simpleId: { type: String, required: true, max: 20, min: 2 },
    label: { type: String, requried: true, max: 50, min: 2, default: "" },
    description: { type: String, maxlength: 200, default: "" },
    playlist: { type: Object, required: true, default: [] },
    playlistId: { type: String, required: false },
    books: { type: Array, required: true, default: [] },
    courses: { type: Array, required: true, default: [] },
    topics: { type: Object, ref: "Topic", required: true, default: [] }
});
exports.default = mongoose_1.model("Category", CategorySchema);
//# sourceMappingURL=category.model.js.map