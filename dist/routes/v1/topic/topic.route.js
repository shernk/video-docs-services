"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const topic_controller_1 = require("../../../controllers/topic/v1/topic.controller");
const router = express_1.Router();
const topicController = new topic_controller_1.TopicController();
router.get("/", (req, res) => topicController.getAllTopic(req, res));
router.get("/:id", (req, res) => topicController.getTopicById(req, res));
router.get("/category/:id", (req, res) => topicController.getTopicByCategoryId(req, res));
router.post("/", (req, res) => topicController.addTopic(req, res));
router.delete("/:id", (req, res) => topicController.deleteTopicById(req, res));
router.delete("/category/:id", (req, res) => topicController.deleteTopicByCategoryId(req, res));
router.put("/:id", (req, res) => topicController.updateTopicById(req, res));
exports.default = router;
//# sourceMappingURL=topic.route.js.map