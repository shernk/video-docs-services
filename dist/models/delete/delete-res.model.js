"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteResponse {
    constructor(data) {
        const defaults = Object.assign({ message: "", status: 200 }, data);
        this.message = defaults.message;
        this.status = defaults.status;
    }
}
exports.DeleteResponse = DeleteResponse;
//# sourceMappingURL=delete-res.model.js.map