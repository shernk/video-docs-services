import { Router } from "express";
import  CaregoryRoutes  from "../v1/category/category.route";

const router = Router({ mergeParams: true });

router.use("/category", CaregoryRoutes);

export default router;
