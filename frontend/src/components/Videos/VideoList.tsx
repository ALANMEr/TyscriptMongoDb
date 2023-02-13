import React, { useEffect, useState } from 'react'
import {Video} from './Video';
import { VideoItem } from './VideoItem';
import { getVideos } from './VideoServer';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const loaadingVieos = async () => {
   const res=await getVideos()
    setVideos(res.data)
  }
  useEffect(() => {
    loaadingVieos()

  }, []);
  return (
   <div>
    {videos.map((video)=>{
      return <VideoItem video={video}/>
    })}
   </div>
  )
}

export default VideoList