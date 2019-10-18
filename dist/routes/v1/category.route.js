"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const category_controller_1 = require("../../controllers/v1/category.controller");
const app = express_1.default();
const router = express_1.Router();
const categoryController = new category_controller_1.CategoryController();
router.get('/v1', categoryController.test);
exports.default = router;
//# sourceMappingURL=category.route.js.map