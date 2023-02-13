import {Router} from 'express';
import * as videoController from '../controllers/Videos';
const router=Router();

router.get("/videos",videoController.getVideos)
router.get("/videos/:id", videoController.getVideosid)
router.post("/videos", videoController.postVideos)

router.put("/videos/:id", videoController.putVideos)
router.delete("/videos/:id", videoController.deleteVideos)

export default router;
