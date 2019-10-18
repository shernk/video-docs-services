"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resources_controller_1 = require("../../../controllers/resources/v1/resources.controller");
const router = express_1.Router();
const resourcesController = new resources_controller_1.ResourcesController();
router.get("/:id", (req, res) => {
    resourcesController.getResourcesById(req, res);
});
exports.default = router;
//# sourceMappingURL=resources.route.js.map