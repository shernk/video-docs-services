import { Router } from "express";
import { CategoryController } from "../../../controllers/category/v1/category.controller";

const router = Router();

const categoryController: CategoryController = new CategoryController();

router.get("/", (req, res) => categoryController.getAllCategories(req, res));
router.get("/:id", (req, res) => categoryController.getCategoryById(req, res));
router.get("/:id/topics", (req, res) =>
  categoryController.getCategoryTopics(req, res)
);
router.post("/", (req, res) => categoryController.addCategory(req, res));
router.put("/:id", (req, res) =>
  categoryController.updateCategoryById(req, res)
);
router.delete("/", (req, res) => categoryController.deleteCategory(req, res));

export default router;
