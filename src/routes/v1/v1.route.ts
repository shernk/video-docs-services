import { Router } from "express";
import  CaregoryRoutes  from "../v1/category/category.route";

const router = Router();

router.use("/category", CaregoryRoutes);

export default router;
