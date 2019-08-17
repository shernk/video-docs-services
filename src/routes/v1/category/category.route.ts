import { Router } from "express";
import { CategoryController } from "../../../controllers/category/v1/category.controller";

const router = Router({ mergeParams: true });

const categoryController: CategoryController = new CategoryController();

router.get("/", categoryController.test);

export default router;
