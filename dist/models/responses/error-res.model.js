"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorResponse {
    constructor(data) {
        const defaults = Object.assign({ message: "", status: 401 }, data);
        this.message = defaults.message;
        this.status = defaults.status;
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=error-res.model.js.map