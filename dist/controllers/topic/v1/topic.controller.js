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
const playlist_model_1 = require("../../../models/playlist/playlist.model");
const delete_res_model_1 = require("../../../models/responses/delete-res.model");
const topic_model_1 = __importDefault(require("../../../models/topic/topic.model"));
const video_controller_1 = require("./../../video/v1/video.controller");
class TopicController {
    constructor() {
        this.videoController = new video_controller_1.VideoController();
    }
    getAllTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topics = yield topic_model_1.default.find();
                // ! cannot populate the playlist's data
                // .populate("playlist")
                // .exec();
                res.send(topics);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    getTopicById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topic = yield topic_model_1.default.findById(req.param("id"));
                res.send(topic);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    getTopicByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topics = yield topic_model_1.default.findOne({
                    categorySimpleId: req.param("id")
                    // simpleId: {topicsSimpleId: req.param('simpleId')}
                });
                topics.playlist = yield this.getPlayList(topics.playlistId);
                res.send(topics);
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
    deleteTopicById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield topic_model_1.default.deleteOne({ _id: req.body._id });
                const successfulDetete = new delete_res_model_1.DeleteResponse({
                    message: `Successfully Deleted Topic`,
                    status: 200
                });
                res.status(200).send(successfulDetete);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    deleteTopicByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield topic_model_1.default.deleteOne({ categoryId: req.params });
                const successfulDetete = new delete_res_model_1.DeleteResponse({
                    message: `Successfully Deleted Topic`,
                    status: 200
                });
                res.status(200).send(successfulDetete);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    updateTopicById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            const param = req.param("id");
            try {
                const topic = yield topic_model_1.default.findByIdAndUpdate(param, body, {
                    new: true
                })
                    .populate({ path: "playlist", model: "Items" })
                    .exec((err, items) => console.log("Populated playlist " + items));
                res.send(topic);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    getPlayList(playlistId) {
        return __awaiter(this, void 0, void 0, function* () {
            const video = yield this.videoController.getPlayListById(playlistId);
            return new playlist_model_1.Playlist(video);
        });
    }
}
exports.TopicController = TopicController;
//# sourceMappingURL=topic.controller.js.map