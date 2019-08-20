import { Request, Response } from "express";
import Category from "../../../models/category.model";
import { DeleteResponse } from "../../../models/responses/delete-res.model";

export class CategoryController {
  public async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await Category.find();
      res.send(categories);
    } catch (err) {
      res.send(err);
    }
  }

  public async getCategoryById(req: Request, res: Response): Promise<void> {
    try {
      const category = await Category.findById(req.params.id);
      res.send(category);
    } catch (err) {
      res.send(err);
    }
  }

  public async addCategory(req: Request, res: Response): Promise<void> {
    const newCategory = new Category(req.body);
    try {
      const category = await newCategory.save();
      res.send(category);
    } catch (err) {
      res.send(err);
    }
  }

  public async deleteCategory(req: Request, res: Response): Promise<void> {
    try {
      await Category.deleteOne({ _id: req.body._id });
      const successfulDetete = new DeleteResponse({
        message: `Successfully Deleted Category`,
        status: 200
      });
      res.status(200).send(successfulDetete);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async updateCategoryById(req: Request, res: Response): Promise<void> {
    const { params, body } = req;
    try {
      const category = await Category.findByIdAndUpdate(params.id, body, {
        new: true
      });
      res.send(category);
    } catch (err) {
      res.status(404).send(err);
    }
  }
}
