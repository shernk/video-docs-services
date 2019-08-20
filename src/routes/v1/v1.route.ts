import { Router } from "express";
import CaregoryRoutes from "../v1/category/category.route";
import TopicRoutes from "../v1/topic/topic.route";

const router = Router();

router.use("/category", CaregoryRoutes);
router.use("/topic", TopicRoutes);

export default router;
