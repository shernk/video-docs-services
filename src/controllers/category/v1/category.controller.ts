import { Request, Response } from "express";
import Category from "../../../models/category/category.model";
import { Course } from "../../../models/course/course.interface";
import { Playlist } from "../../../models/playlist/playlist.model";
import { DeleteResponse } from "../../../models/responses/delete-res.model";
import Topic from "../../../models/topic/topic.model";
import { Book } from "./../../../models/book/book.interface";
import { BOOKS } from "./../../../models/data-sets/book.data";
import { COURSES } from "./../../../models/data-sets/course.data";
import { VideoController } from "./../../video/v1/video.controller";
export class CategoryController {
  private videoController = new VideoController();

  constructor() {
    this.videoController = new VideoController();
  }

  public async getAllCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await Category.find();
        // !Bug: cannot populate the topic's  data
        // .populate("topics", categoryModel, "Topic")
        // .exec();
      /* 
         ! when execute these code the data have just showed in console but not in database
        .exec((err, topics) => {
        if (err) {
          console.log("This is a getAllCategories error" + err);
        }
        console.log(topics);

        }); 
      */

      res.send(categories);
    } catch (err) {
      res.send(err);
    }
  }

  public async getCategoryTopics(req: Request, res: Response): Promise<void> {
    try {
      const category = await Category.findOne({ simpleId: req.params });
      const topics = await Topic.find({ categoryId: category._id });

      category.topics = topics;
      category.books = this.getBooks(category.simpleId);
      category.courses = this.getCourses(category.simpleId);

      res.send(category);
    } catch (err) {
      res.send(err);
    }
  }

  public async getCategoryById(req: Request, res: Response): Promise<void> {
    try {
      const category = await Category.findOne({ simpleId: req.param("id") });

      category.playlist = await this.getPlayList(category.playlistId);
      category.books = this.getBooks(category.simpleId);
      category.courses = this.getCourses(category.simpleId);

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
    const body = req.body;
    const param = req.param("id");
    try {
      const category = await Category.findByIdAndUpdate(param, body, {
        new: true
      });

      res.send(category);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  private getBooks(simpleId: string): Book[] {
    return BOOKS[simpleId];
  }

  private getCourses(simpleId: string): Course[] {
    return COURSES[simpleId];
  }

  private async getPlayList(playlistId: string): Promise<Playlist> {
    const video = await this.videoController.getPlayListById(playlistId);

    return new Playlist(video);
  }
}
