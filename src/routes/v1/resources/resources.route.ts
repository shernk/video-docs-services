import { Router } from "express";
import { ResourcesController } from "../../../controllers/resources/v1/resources.controller";

const router = Router();

const resourcesController: ResourcesController = new ResourcesController();

router.get("/:id", (req, res) => {
  resourcesController.getResourcesById(req, res);
});

export default router;
