import { Router } from "express";
import { TopicController } from "../../../controllers/topic/v1/topic.controller";

const router = Router();

const topicController: TopicController = new TopicController();

router.get("/", topicController.getAllTopic);
router.get("/:id", topicController.getTopicById);
router.get("/category/:id", topicController.getTopicByCategoryId);
router.post("/", topicController.addTopic);
router.delete("/:id", topicController.deleteTopicById);
router.delete("/category/:id", topicController.deleteTopicByCategoryId);
router.put("/:id", topicController.updateTopicById);

export default router;
