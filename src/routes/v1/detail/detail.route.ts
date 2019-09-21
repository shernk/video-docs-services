import { Router } from "express";
import { DetailController } from "../../../controllers/detail/v1/detail.controller";

const router = Router();

const detailController: DetailController = new DetailController();

router.get("/", (req, res) => detailController.getAllDetail(req, res));
router.get("/:id", (req, res) => detailController.getDetailById(req, res));
router.get("/category/:id", (req, res) =>
  detailController.getDetailByCategoryId(req, res)
);
router.post("/", (req, res) => detailController.addDetail(req, res));
router.delete("/:id", (req, res) => detailController.deleteDetailById(req, res));
router.delete("/category/:id", (req, res) =>
  detailController.deleteDetailByCategoryId(req, res)
);
router.put("/:id", (req, res) => detailController.updateDetailById(req, res));

export default router;
