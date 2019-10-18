"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const items_model_1 = __importDefault(require("./../../models/playlist/items/items.model"));
const TopicSchema = new mongoose_1.Schema({
    simpleId: { type: String, required: true, minlength: 2, maxlength: 50 },
    categorySimpleId: { type: String, requried: true },
    description: { type: String, maxlength: 200, default: "" },
    label: { type: String, requried: true, maxlength: 50, minlength: 2 },
    playlistId: { type: String, required: true },
    playlist: { type: Object, required: true, default: [], ref: items_model_1.default },
    videoId: { type: String, required: true, minlength: 2, maxlength: 50 }
});
exports.default = mongoose_1.model("Topic", TopicSchema);
//# sourceMappingURL=topic.model.js.map