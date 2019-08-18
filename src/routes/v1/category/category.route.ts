import { Router } from "express";
import { CategoryController } from "../../../controllers/category/v1/category.controller";

const router = Router();

const categoryController: CategoryController = new CategoryController();

router.get("/", categoryController.test);
router.post("/", categoryController.addNewCategory);

export default router;
