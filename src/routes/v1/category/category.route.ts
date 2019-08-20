import { Router } from "express";
import { CategoryController } from "../../../controllers/category/v1/category.controller";

const router = Router();

const categoryController: CategoryController = new CategoryController();

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.post("/", categoryController.addCategory);
router.put("/:id", categoryController.updateCategoryById);
router.delete("/", categoryController.deleteCategory);

export default router;
