"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    simpleId: { type: Object, required: true, max: 20, min: 2 },
    label: { type: String, requried: true, max: 50, min: 2, default: "" },
    /*
     TODO: watch again
     * Ep29
     * Time: 29:21
     ! show playlist's item[{videoID, desciption, title, thumnailUrl}]
     */
    playlist: { type: Object, required: false },
    playlistId: { type: String, required: true },
    description: { type: String, maxlength: 200, default: "" },
    books: { type: Array, required: false, default: [] },
    courses: { type: Array, required: false, default: [] }
});
exports.default = mongoose_1.model("Category", CategorySchema);
//# sourceMappingURL=category.model.js.map