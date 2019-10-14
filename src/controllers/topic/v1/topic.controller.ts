import { Request, Response } from "express";
import { Playlist } from "../../../models/playlist/playlist.model";
import { DeleteResponse } from "../../../models/responses/delete-res.model";
import Topic from "../../../models/topic/topic.model";
import { VideoController } from "./../../video/v1/video.controller";

export class TopicController {
  private videoController: VideoController;

  constructor() {
    this.videoController = new VideoController();
  }

  public async getAllTopic(req: Request, res: Response): Promise<void> {
    try {
      const topics = await Topic.find()
        .populate({ path: "playlist", model: "Items" })
        .exec((err, playlist) => {
          if (err) {
            console.log("This is getAllTopic + ", err);
          }
          console.log(playlist);
        });

      res.send(topics);
    } catch (err) {
      res.send(err);
    }
  }

  public async getTopicById(req: Request, res: Response): Promise<void> {
    try {
      const topic = await Topic.findById(req.param("id"));
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
      const topics = await Topic.findOne({
        categorySimpleId: req.param("id")
        // simpleId: {topicsSimpleId: req.param('simpleId')}
      });

      topics.playlist = await this.getPlayList(topics.playlistId);

      res.send(topics);
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

  public async deleteTopicByCategoryId(
    req: Request,
    res: Response
  ): Promise<void> {
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
    const { body } = req;
    const param = req.param("id");
    try {
      const topic = await Topic.findByIdAndUpdate(param, body, {
        new: true
      })
        .populate({ path: "playlist", model: "Items" })
        .exec((err, items) => console.log("Populated playlist " + items));

      res.send(topic);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  private async getPlayList(playlistId: string): Promise<Playlist> {
    const video = await this.videoController.getPlayListById(playlistId);

    return new Playlist(video);
  }
}
