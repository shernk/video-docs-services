import { Request, Response } from "express";
import Category from "../../../models/category.model";
import { DeleteResponse } from "../../../models/responses/delete-res.model";

export class CategoryController {
  public getAllCategories(req: Request, res: Response): void {
    Category.find({}, (err, categories) => {
      if (err) {
        res.send(err);
      }

      res.json(categories);
    });
  }

  public getCategoryById(req: Request, res: Response): void {
    Category.findById(req.params.id, (err, category) => {
      if (err) {
        res.status(404).send(err);
      }

      res.send(category);
    });
  }

  public addNewCategory(req: Request, res: Response): void {
    const newCategory = new Category(req.body);

    newCategory.save((err, category) => {
      if (err) {
        res.send(err);
      }

      res.json(category);
    });
  }

  public deleteCategory(req: Request, res: Response): void {
    Category.deleteOne({ _id: req.body._id }, (err: any) => {
      if (err) {
        res.status(404).send(err);
      }

      const successfulDetete = new DeleteResponse({
        message: `Successfully Deleted Category`,
        status: 200
      });
      res.status(200).send(successfulDetete);
    });
  }

  public updateCategoryById(req: Request, res: Response): void {
    Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, category) => {
        if (err) {
          res.status(404).send(err);
        }

        res.send(category);
      }
    );
  }
}
