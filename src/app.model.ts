import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressRateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import { Credentials } from "./models/enums/api-keys.enum";
import { ErrorResponse } from "./models/responses/error-res.model";

class App {
  public app: express.Application;
  public mongoUrl: string =
    process.env.MONGODB_URI || "mongodb://localhost/admin";

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.corsSetup();
    this.routeGuardAPI();
  }

  private config(): void {
    const limiter = new expressRateLimit({
      max: 100,
      windowMs: 30 * 60 * 50
    });
    this.app.use(limiter);
    this.app.use(express.json());
    this.app.use(helmet());
    dotenv.config();
  }

  private mongoSetup(): void {
    (mongoose as any).Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.connect(this.mongoUrl);
    mongoose.connection.once("open", db => {
      console.log("mongoDB connected successfully");
      return db;
    });
  }

  private corsSetup(): void {
    const allowedOrigins: string[] = [
      "https://www.documentation.com",
      "http://localhost:4200"
    ];

    const options = {
      origin(origin: any, callback: any) {
        if (!origin) {
          return callback(null, true);
        }

        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = `The CORS policy for this site DOES NOT allow access from the specified Origin`;

          return callback(new Error(msg), false);
        }

        return callback(null, true);
      }
    };

    this.app.use(cors(options));
  }

  private routeGuardAPI(): void {
    // Get API_KEY
    this.app.use("*", (req, res, next) => {
      if (req.method !== "GET") {
        const API_KEY = req.query.key;

        if (API_KEY === Credentials.API) {
          next();
        } else {
          res
            .status(401)
            .send(new ErrorResponse({ message: "Invalid API KEY" }));
        }
      }

      next();
    });
  }
}

export default new App().app;
