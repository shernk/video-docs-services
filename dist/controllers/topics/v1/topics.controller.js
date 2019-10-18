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
const topic_model_1 = __importDefault(require("../../../models/topic.model"));
class TopicController {
    getTopicByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topic = yield topic_model_1.default.findById({ categoryId: req.params.id });
                res.send(topic);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    addTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newTopic = new topic_model_1.default(req.body);
            try {
                const topic = yield newTopic.save();
                res.json(topic);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    deleteTopic(req, res) {
        topic_model_1.default.deleteOne({ _id: req.body._id }, (err) => {
            if (err) {
                res.status(404).send(err);
            }
            const successfulDetete = new DeleteResponse({
                message: `Successfully Deleted Topic`,
                status: 200
            });
            res.status(200).send(successfulDetete);
        });
    }
    updateTopicById(req, res) {
        const { params, body } = req;
        topic_model_1.default.findByIdAndUpdate(params.id, body, { new: true }, (err, topic) => {
            if (err) {
                res.status(404).send(err);
            }
            res.send(topic);
        });
    }
}
exports.TopicController = TopicController;
//# sourceMappingURL=topics.controller.js.map