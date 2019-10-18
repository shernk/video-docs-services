"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TopicSchema = new mongoose_1.Schema({
    categoryId: { type: String, requried: true },
    label: { type: String, requried: true, maxlength: 50, minlength: 2 },
    description: { type: String, maxlength: 200, default: "" }
});
exports.default = mongoose_1.model("Topic", TopicSchema);
//# sourceMappingURL=topic.model.js.map