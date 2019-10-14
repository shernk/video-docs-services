import { Request, Response } from "express";
import Detail from "../../../models/detail/detail.model";
import { DeleteResponse } from "../../../models/responses/delete-res.model";

export class DetailController {
  public async getAllDetail(req: Request, res: Response): Promise<void> {
    try {
      const detail = await Detail.find();
      res.send(detail);
    } catch (err) {
      res.send(err);
    }
  }

  public async getDetailById(req: Request, res: Response): Promise<void> {
    try {
      const detail = await Detail.findOne({ _id: req.param("_id") });
      res.send(detail);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async getDetailByCategoryId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const detail = await Detail.find({ categoryId: req.param("_id") });
      res.send(detail);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async getDetailByCategoryTopic(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const detail = await Detail.find({
        categorySimpleId: req.param("simpleId"),
        topicsSimpleId: req.param("simpleId")
      });
      res.send(detail);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async getDetailByCategoryTopicDetail(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const detail = await Detail.findOne({
        simpleId: req.param("simpleId"),
        categorySimpleId: req.param("categorySimpleId"),
        topicsSimpleId: req.param("topicsSimpleId")
      });
      res.send(detail);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async addDetail(req: Request, res: Response): Promise<void> {
    const newDetail = new Detail(req.body);
    try {
      const detail = await newDetail.save();
      res.json(detail);
    } catch (err) {
      res.send(err);
    }
  }

  public async deleteDetailById(req: Request, res: Response): Promise<void> {
    try {
      await Detail.deleteOne({ _id: req.body._id });
      const successfulDetete = new DeleteResponse({
        message: `Successfully Deleted Detail`,
        status: 200
      });
      res.status(200).send(successfulDetete);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async deleteDetailByCategoryId(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      await Detail.deleteOne({ categoryId: req.param("_id") });
      const successfulDetete = new DeleteResponse({
        message: `Successfully Deleted Detail`,
        status: 200
      });
      res.status(200).send(successfulDetete);
    } catch (err) {
      res.status(404).send(err);
    }
  }

  public async updateDetailById(req: Request, res: Response): Promise<void> {
    const { body } = req;
    const param = req.param("_id");
    try {
      const detail = await Detail.findByIdAndUpdate(param, body, {
        new: true
      });
      res.send(detail);
    } catch (err) {
      res.status(404).send(err);
    }
  }
}
