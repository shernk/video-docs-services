import { Request, Response } from "express";

export class CategoryController {
  public test(req: Request, res: Response) {
    res.send("API WORKS!!!");
  }
}
