"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemsSchema = new mongoose_1.Schema({
    title: { type: String, required: true, minlength: 2, default: "" },
    description: { type: String, required: true, minlength: 10, default: "" },
    playlistId: { type: String, required: true, minlength: 5, default: "" },
    videoId: { type: String, required: true, default: "" },
    thumbnailUrl: { type: Object, required: true, default: "" }
});
exports.default = mongoose_1.model("Items", itemsSchema);
//# sourceMappingURL=items.model.js.map