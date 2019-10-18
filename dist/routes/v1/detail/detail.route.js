"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detail_controller_1 = require("../../../controllers/detail/v1/detail.controller");
const router = express_1.Router();
const detailController = new detail_controller_1.DetailController();
router.get("/", (req, res) => detailController.getAllDetail(req, res));
router.get("/:id", (req, res) => detailController.getDetailById(req, res));
router.get("/category/:id", (req, res) => detailController.getDetailByCategoryId(req, res));
router.get("/category/:categorySimpleId/topics/:topicsSimpleId/", (req, res) => {
    detailController.getDetailByCategoryTopic(req, res);
});
router.get("/:simpleId/category/:categorySimpleId/topics/:topicsSimpleId/", (req, res) => {
    detailController.getDetailByCategoryTopicDetail(req, res);
});
router.post("/", (req, res) => detailController.addDetail(req, res));
router.delete("/:id", (req, res) => detailController.deleteDetailById(req, res));
router.delete("/category/:id", (req, res) => detailController.deleteDetailByCategoryId(req, res));
router.put("/:id", (req, res) => detailController.updateDetailById(req, res));
exports.default = router;
//# sourceMappingURL=detail.route.js.map