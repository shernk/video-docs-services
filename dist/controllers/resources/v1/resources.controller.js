"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_data_1 = require("./../../../models/data-sets/book.data");
const course_data_1 = require("./../../../models/data-sets/course.data");
class ResourcesController {
    getResourcesById(req, res) {
        const simpleId = req.params.toString();
        const books = this.getBooks(simpleId);
        const courses = this.getCourse(simpleId);
        res.send({ books, courses });
        return { books, courses };
    }
    getBooks(simpleId) {
        return book_data_1.BOOKS[simpleId];
    }
    getCourse(simpleId) {
        return course_data_1.COURSES[simpleId];
    }
}
exports.ResourcesController = ResourcesController;
//# sourceMappingURL=resources.controller.js.map