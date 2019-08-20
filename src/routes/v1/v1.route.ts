import { Router } from "express";
import CaregoryRoutes from "../v1/category/category.route";
import TopicRoutes from "../v1/topic/topic.route";
import VideoRoutes from "../v1/video/video.route";

const router = Router();

router.use("/category", CaregoryRoutes);
router.use("/topic", TopicRoutes);
router.use("/video", VideoRoutes);

export default router;
