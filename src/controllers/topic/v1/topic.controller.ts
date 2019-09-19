import { Request, Response } from "express";
import { DeleteResponse } from "../../../models/responses/delete-res.model";
import Topic from "../../../models/topic.model";

export class TopicController {
  public async getAllTopic(req: Request, res: Response): Promise<void> {
    try {
      const categories = await Topic.find();
      res.send(categories);
    } catch (err) {
      res.send(err);
    }
  }

  public async getTopicById(req: Request, res: Response): Promise<void> {
    try {
      const topic = await Topic.findById(req.params);
      res.send(topic);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async getTopicByCategoryId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const topic = await Topic.find({ categoryId: req.params });
      res.send(topic);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async addTopic(req: Request, res: Response): Promise<void> {
    const newTopic = new Topic(req.body);
    try {
      const topic = await newTopic.save();
      res.json(topic);
    } catch (err) {
      res.send(err);
    }
  }

  public async deleteTopicById(req: Request, res: Response): Promise<void> {
    try {
      await Topic.deleteOne({ _id: req.body._id });
      const successfulDetete = new DeleteResponse({
        message: `Successfully Deleted Topic`,
        status: 200
      });
      res.status(200).send(successfulDetete);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async deleteTopicByCategoryId(req: Request, res: Response): Promise<void> {
    try {
      await Topic.deleteOne({ categoryId: req.params });
      const successfulDetete = new DeleteResponse({
        message: `Successfully Deleted Topic`,
        status: 200
      });
      res.status(200).send(successfulDetete);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async updateTopicById(req: Request, res: Response): Promise<void> {
    const { params, body } = req;
    try {
      const topic = await Topic.findByIdAndUpdate(params, body, {
        new: true
      });
      res.send(topic);
    } catch (err) {
      res.status(404).send(err);
    }
  }
}
