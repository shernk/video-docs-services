import { Router } from "express";
import { VideoController } from "../../../controllers/video/v1/video.controller";

const router = Router();

const videoController: VideoController = new VideoController();

export default router;
