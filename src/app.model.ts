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
    this.routeGuardSetup();
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

      /*
        * Eps30
        * Time: 25:30
       ! Added localhost
       * Fixed CORS policy: fetch at https://video-docs-service.herokuapp.com/api/v1/category from origin http://localhost: 4200
       */
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

  /*
  * Eps30
  * Time: 53:00
  ! Cannot update by API_KEY
  */
  private routeGuardSetup(): void {
    // Get API_KEY
    this.app.use("*", (req, res, next) => {
      if (req.method !== "GET") {
        const apiKey = req.query.key;

        console.log("apiKey: " + apiKey);

        if (apiKey === Credentials.API) {
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
