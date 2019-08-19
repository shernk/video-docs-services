import bodyParser = require("body-parser");
import express, { Request, Response } from "express";
import mongoose from "mongoose";

class App {
  public app: express.Application;
  public mongoUrl: string = "mongodb://localhost:27017";

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup() {
    (mongoose as any).Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: false });
  }
}

export default new App().app;
