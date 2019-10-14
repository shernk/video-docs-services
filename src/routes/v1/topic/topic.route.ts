import { Router } from "express";
import { TopicController } from "../../../controllers/topic/v1/topic.controller";

const router = Router();

const topicController: TopicController = new TopicController();

router.get("/", (req, res) => topicController.getAllTopic(req, res));
router.get("/:id", (req, res) => topicController.getTopicById(req, res));
router.get("/category/:id", (req, res) =>
  topicController.getTopicByCategoryId(req, res)
); 
router.post("/", (req, res) => topicController.addTopic(req, res));
router.delete("/:id", (req, res) => topicController.deleteTopicById(req, res));
router.delete("/category/:id", (req, res) =>
  topicController.deleteTopicByCategoryId(req, res)
);
router.put("/:id", (req, res) => topicController.updateTopicById(req, res));

export default router;
