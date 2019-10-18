"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const topic_model_1 = __importDefault(require("../../../../models/topic.model"));
class TopicsController {
    getTopicsByCategoryId(req, res) {
        topic_model_1.default.findById({ categoryId: req.params.id }, (err, topic) => {
            if (err) {
                res.status(404).send(err);
            }
            res.send(topic);
        });
    }
    addTopic(req, res) {
        const newTopic = new topic_model_1.default(req.body);
        newTopic.save((err, topic) => {
            if (err) {
                res.send(err);
            }
            res.json(topic_model_1.default);
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
exports.TopicsController = TopicsController;
//# sourceMappingURL=topic.controller.js.map