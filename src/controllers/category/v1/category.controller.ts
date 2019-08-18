import { Request, Response } from "express";
import Category from "../../../models/category.model";

export class CategoryController {
  public test(req: Request, res: Response) {
    res.send("API WORKS!!!");
  }

  public addNewCategory(req: Request, res: Response) {
    const newCategory = new Category(req.body);

    newCategory.save((err, category) => {
      if (err) {
        res.send(err);
      }

      res.json(category);
    });
  }
}
