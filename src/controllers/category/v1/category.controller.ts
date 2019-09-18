import { Request, Response } from "express";
import Category from "../../../models/category.model";
import { DeleteResponse } from "../../../models/responses/delete-res.model";
import { Playlist } from "./../../../models/category/playlist.model";
import { BOOKS } from "./../../../models/data-sets/book.data";
import { COURSE } from "./../../../models/data-sets/course.data";
import { VideoController } from "./../../video/v1/video.controller";

export class CategoryController {
  private videoController = new VideoController();

  constructor() {
    this.videoController = new VideoController();
  }

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
      const category = await Category.findOne({ simpleId: req.params.id });
      const video = await this.videoController.getPlayListById(
        category.playlistId
      );

      category.playlist = new Playlist(video);
      category.books = BOOKS[category.simpleId];
      category.courses = COURSE[category.simpleId];

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
