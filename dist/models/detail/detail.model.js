"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DetailSchema = new mongoose_1.Schema({
    label: { type: String, requried: true, max: 50, min: 2, default: "" },
    description: { type: String, maxlength: 200, default: "" },
    simpleId: { type: String, required: true, max: 20, min: 2 },
    categorySimpleId: { type: String, required: true },
    topicsSimpleId: { type: String, required: true },
    videoId: { type: String, required: true },
});
exports.default = mongoose_1.model("Detail", DetailSchema);
//# sourceMappingURL=detail.model.js.map