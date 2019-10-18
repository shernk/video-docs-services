"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const api_keys_enum_1 = require("./models/enums/api-keys.enum");
const error_res_model_1 = require("./models/responses/error-res.model");
class App {
    // process.env.MONGO_URI || "mongodb://localhost/admin";
    constructor() {
        this.MONGO_URI = "mongodb+srv://sherlock:sherlock123@cluster0-jceqk.mongodb.net/test?retryWrites=true&w=majority";
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.corsSetup();
        this.routeGuardAPI();
    }
    config() {
        const limiter = new express_rate_limit_1.default({
            max: 100,
            windowMs: 30 * 60 * 50
        });
        this.app.use(limiter);
        this.app.use(express_1.default.json());
        this.app.use(helmet_1.default());
        dotenv_1.default.config();
    }
    mongoSetup() {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default
            .connect(this.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
            .then(() => mongoose_1.default.connection.on("open", () => {
            console.log("MongoDB database connection established successfully");
        }))
            .catch(err => {
            console.error(err);
        });
    }
    corsSetup() {
        const allowedOrigins = [
            "https://www.videodevdocs.com",
            "http://localhost:4200"
        ];
        const options = {
            origin(origin, callback) {
                if (!origin) {
                    return callback(null, true);
                }
                if (allowedOrigins.indexOf(origin) === -1) {
                    const msg = `The CORS policy for this site DOES NOT allow access from the specified Origin`;
                    return callback(new Error(msg), false);
                }
                else {
                    return callback(null, true);
                }
            }
        };
        this.app.use(cors_1.default(options));
    }
    routeGuardAPI() {
        // Get API_KEY
        this.app.use("*", (req, res, next) => {
            if (req.method !== "GET") {
                const API_KEY = req.query.key;
                if (API_KEY === api_keys_enum_1.Credentials.API) {
                    try {
                        next();
                    }
                    catch (error) {
                        res.status(404).send(new error_res_model_1.ErrorResponse({
                            message: "cannot set headers after they are sent to the client"
                        }));
                    }
                }
                else {
                    res
                        .status(401)
                        .send(new error_res_model_1.ErrorResponse({ message: "Invalid API KEY" }));
                }
            }
            else {
                next();
            }
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.model.js.map