import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressRateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";

class App {
  public app: express.Application;
  public mongoUrl: string =
    process.env.MONGODB_URI || "mongodb://localhost/admin";

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.corsSetup();
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

  private mongoSetup() {
    (mongoose as any).Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.connect(this.mongoUrl);
  }

  private corsSetup() {
    const allowedOrigins: string[] = [
      "https://www.videodevdocs.com",
      "http://localhost:4200"
    ];

    const options = {
      origin(origin: any, callback: any) {
        if (!origin) {
          return callback(null, true);
        }

        if (allowedOrigins.indexOf(origin) === -1) {
          const msg = `The CORS policy for this site does not allow access from the specified Origin`;

          return callback(new Error(msg), false);
        }

        return callback(null, true);
      }
    };

    this.app.use(cors(options));
  }
}

export default new App().app;
