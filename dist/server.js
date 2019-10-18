"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_model_1 = __importDefault(require("./app.model"));
const v1_route_1 = __importDefault(require("./routes/v1/v1.route"));
app_model_1.default.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "https://www.documentation.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});
// defines version routes
app_model_1.default.use("/api/v1", v1_route_1.default);
const port = process.env.PORT || 3000;
app_model_1.default.listen(port, () => console.log("Server is running on port: 3000" + port));
//# sourceMappingURL=server.js.map