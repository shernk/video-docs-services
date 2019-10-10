import { Router } from "express";
import CategoryRoutes from "../v1/category/category.route";
import DetailRoutes from "../v1/detail/detail.route";
import ResourcesRoutes from "../v1/resources/resources.route";
import TopicRoutes from "../v1/topic/topic.route";

const router = Router();

router.use("/category", CategoryRoutes);
router.use("/topic", TopicRoutes);
router.use("/detail", DetailRoutes);
router.use("/resources", ResourcesRoutes);

export default router;
