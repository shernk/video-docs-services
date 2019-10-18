"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_route_1 = __importDefault(require("../v1/category/category.route"));
const detail_route_1 = __importDefault(require("../v1/detail/detail.route"));
const resources_route_1 = __importDefault(require("../v1/resources/resources.route"));
const topic_route_1 = __importDefault(require("../v1/topic/topic.route"));
const router = express_1.Router();
router.use("/category", category_route_1.default);
router.use("/topic", topic_route_1.default);
router.use("/detail", detail_route_1.default);
router.use("/resources", resources_route_1.default);
exports.default = router;
//# sourceMappingURL=v1.route.js.map