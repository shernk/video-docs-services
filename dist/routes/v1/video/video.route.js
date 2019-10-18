"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const video_controller_1 = require("../../../controllers/video/v1/video.controller");
const router = express_1.Router();
const videoController = new video_controller_1.VideoController();
exports.default = router;
//# sourceMappingURL=video.route.js.map