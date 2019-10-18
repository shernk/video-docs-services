"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("../../../controllers/category/v1/category.controller");
const router = express_1.Router();
const categoryController = new category_controller_1.CategoryController();
router.get("/", (req, res) => categoryController.getAllCategories(req, res));
router.get("/:id", (req, res) => categoryController.getCategoryById(req, res));
router.get("/:id/topics", (req, res) => categoryController.getCategoryTopics(req, res));
router.post("/", (req, res) => categoryController.addCategory(req, res));
router.put("/:id", (req, res) => categoryController.updateCategoryById(req, res));
router.delete("/:id", (req, res) => categoryController.deleteCategory(req, res));
exports.default = router;
//# sourceMappingURL=category.route.js.map