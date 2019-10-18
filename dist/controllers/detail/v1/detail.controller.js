"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const detail_model_1 = __importDefault(require("../../../models/detail/detail.model"));
const delete_res_model_1 = require("../../../models/responses/delete-res.model");
class DetailController {
    getAllDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield detail_model_1.default.find();
                res.send(detail);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    getDetailById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield detail_model_1.default.findOne({ _id: req.param("_id") });
                res.send(detail);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    getDetailByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield detail_model_1.default.find({ categoryId: req.param("_id") });
                res.send(detail);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    getDetailByCategoryTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield detail_model_1.default.find({
                    categorySimpleId: req.param("simpleId"),
                    topicsSimpleId: req.param("simpleId")
                });
                res.send(detail);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    getDetailByCategoryTopicDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const detail = yield detail_model_1.default.findOne({
                    simpleId: req.param("simpleId"),
                    categorySimpleId: req.param("categorySimpleId"),
                    topicsSimpleId: req.param("topicsSimpleId")
                });
                res.send(detail);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    addDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDetail = new detail_model_1.default(req.body);
            try {
                const detail = yield newDetail.save();
                res.json(detail);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    deleteDetailById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield detail_model_1.default.deleteOne({ _id: req.body._id });
                const successfulDetete = new delete_res_model_1.DeleteResponse({
                    message: `Successfully Deleted Detail`,
                    status: 200
                });
                res.status(200).send(successfulDetete);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    deleteDetailByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield detail_model_1.default.deleteOne({ categoryId: req.param("_id") });
                const successfulDetete = new delete_res_model_1.DeleteResponse({
                    message: `Successfully Deleted Detail`,
                    status: 200
                });
                res.status(200).send(successfulDetete);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    updateDetailById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const param = req.param("_id");
            try {
                const detail = yield detail_model_1.default.findByIdAndUpdate(param, body, {
                    new: true
                });
                res.send(detail);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
}
exports.DetailController = DetailController;
//# sourceMappingURL=detail.controller.js.map