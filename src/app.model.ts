import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

class App {
  public app: express.Application;
  public mongoUrl: string = "mongodb://localhost:27017/admin";

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.corsSetup();
  }

  private config(): void {
    this.app.use(express.json());
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
      "http://localhost:3000"
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
      }
    };

    this.app.use(cors(options));
  }
}

export default new App().app;
