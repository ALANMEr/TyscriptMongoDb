import {RequestHandler} from 'express';
import { json } from 'stream/consumers';
import Video from "../routes/video"



/**
 * It's a function that takes in a request and a response, and returns a json object of all the videos
 * in the database.
 * @param req - The request object. This contains information about the HTTP request that raised the
 * event.
 * @param res - The response object.
 */
export const getVideos:RequestHandler =async (req, res) => {
   const videos=await Video.find()
   return res.json(videos)
   

}
export const getVideosid: RequestHandler = async (req, res) => {
    
    const videoFound = await Video.findById(req.params.id)
    if (!videoFound) {
        return res.status(301).json({ message: "Video no encontrado" })
    }

    return res.json(videoFound)


}

export const putVideos: RequestHandler = async(req, res) => {
    const videoPut = await Video.findByIdAndUpdate(req.params.id,req.body, { new: true })
    if (!videoPut) {
        return res.status(301).json({ message: "Video no actualizado" })
    }
    res.json(videoPut)
}

export const deleteVideos: RequestHandler = async(req, res) => {
    const videoDelete = await Video.findByIdAndDelete(req.params.id)
    if (!videoDelete) {
        return res.status(301).json({ message: "Video no encontrado" })
    }

    return res.json(videoDelete)
}

export const postVideos: RequestHandler = async (req, res) => {
    const videoFound =await Video.findOne({url:req.body.url})
    
    if (videoFound) {
        return res.status(301).json({message:"Url existe"})
    }

    const video = new Video(req.body)
    await video.save();
    console.log(video)
    res.json("video save")
}