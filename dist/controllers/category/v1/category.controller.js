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
const category_model_1 = __importDefault(require("../../../models/category/category.model"));
const playlist_model_1 = require("../../../models/playlist/playlist.model");
const delete_res_model_1 = require("../../../models/responses/delete-res.model");
const topic_model_1 = __importDefault(require("../../../models/topic/topic.model"));
const book_data_1 = require("./../../../models/data-sets/book.data");
const course_data_1 = require("./../../../models/data-sets/course.data");
const video_controller_1 = require("./../../video/v1/video.controller");
class CategoryController {
    constructor() {
        this.videoController = new video_controller_1.VideoController();
        this.videoController = new video_controller_1.VideoController();
    }
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield category_model_1.default.find();
                // !Bug: cannot populate the topic's  data
                // .populate("topics", categoryModel, "Topic")
                // .exec();
                /*
                   ! when execute these code the data have just showed in console but not in database
                  .exec((err, topics) => {
                  if (err) {
                    console.log("This is a getAllCategories error" + err);
                  }
                  console.log(topics);
          
                  });
                */
                res.send(categories);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    getCategoryTopics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_model_1.default.findOne({ simpleId: req.params });
                const topics = yield topic_model_1.default.find({ categoryId: category._id });
                category.topics = topics;
                category.books = this.getBooks(category.simpleId);
                category.courses = this.getCourses(category.simpleId);
                res.send(category);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_model_1.default.findOne({ simpleId: req.param("id") });
                category.playlist = yield this.getPlayList(category.playlistId);
                category.books = this.getBooks(category.simpleId);
                category.courses = this.getCourses(category.simpleId);
                res.send(category);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    addCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = new category_model_1.default(req.body);
            try {
                const category = yield newCategory.save();
                res.send(category);
            }
            catch (err) {
                res.send(err);
            }
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield category_model_1.default.deleteOne({ _id: req.body._id });
                const successfulDetete = new delete_res_model_1.DeleteResponse({
                    message: `Successfully Deleted Category`,
                    status: 200
                });
                res.status(200).send(successfulDetete);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    updateCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const param = req.param("id");
            try {
                const category = yield category_model_1.default.findByIdAndUpdate(param, body, {
                    new: true
                });
                res.send(category);
            }
            catch (err) {
                res.status(404).send(err);
            }
        });
    }
    getBooks(simpleId) {
        return book_data_1.BOOKS[simpleId];
    }
    getCourses(simpleId) {
        return course_data_1.COURSES[simpleId];
    }
    getPlayList(playlistId) {
        return __awaiter(this, void 0, void 0, function* () {
            const video = yield this.videoController.getPlayListById(playlistId);
            return new playlist_model_1.Playlist(video);
        });
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map