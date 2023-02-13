import {Router} from 'express';
import * as videoController from '../controllers/Videos';

/* Creating a new instance of the router. */
const router=Router();

/* Creating a route for each of the HTTP methods. */
router.get("/videos",videoController.getVideos)
router.get("/videos/:id", videoController.getVideosid)
router.post("/videos", videoController.postVideos)
router.put("/videos/:id", videoController.putVideos)
router.delete("/videos/:id", videoController.deleteVideos)

export default router;
