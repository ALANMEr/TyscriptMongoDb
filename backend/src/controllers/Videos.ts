import {RequestHandler} from 'express';
import Video from "../models/video"



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
/**
 * It's a function that receives a request and a response, and it returns a response.
 * 
 * The function is async, which means that it returns a promise.
 * 
 * The function uses the async/await syntax to wait for the promise to resolve.
 * 
 * The function uses the findById method to find a video by its id.
 * 
 * If the video is not found, the function returns a response with a 301 status code and a message.
 * 
 * If the video is found, the function returns a response with the video.
 * 
 * The function uses the params property of the request object to get the id of the video.
 * 
 * The function uses the json method of the response object to send the video.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The video found by id
 */
export const getVideosid: RequestHandler = async (req, res) => {
    
    const videoFound = await Video.findById(req.params.id)
    if (!videoFound) {
        return res.status(301).json({ message: "Video no encontrado" })
    }

    return res.json(videoFound)


}

/**
 * It takes the id of the video to be updated, and the body of the request, which contains the new
 * data, and updates the video in the database.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The videoPut is being returned.
 */
/**
 * It takes the id of the video to be updated, and the body of the request, which contains the updated
 * information, and updates the video in the database.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The videoPut is being returned.
 */
export const putVideos: RequestHandler = async(req, res) => {
    const videoPut = await Video.findByIdAndUpdate(req.params.id,req.body, { new: true })
    if (!videoPut) {
        return res.status(301).json({ message: "Video no actualizado" })
    }
    res.json(videoPut)
}

/**
 * It deletes a video from the database by its id.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The video that was deleted.
 */
export const deleteVideos: RequestHandler = async(req, res) => {
    const videoDelete = await Video.findByIdAndDelete(req.params.id)
    if (!videoDelete) {
        return res.status(301).json({ message: "Video no encontrado" })
    }

    return res.json(videoDelete)
}
/**
 * It takes a request, checks if the url exists in the database, if it does, it returns a message, if
 * it doesn't, it creates a new video and saves it to the database.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The video is being returned.
 */

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