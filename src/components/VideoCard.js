import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'
// import { Typography, Card, CardContent, CardMedia } from '@mui/material';

export default function VideoCard({ videos }) {

  // console.log(videos)
  return (
    <div className="m-3 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
      {videos?.map((video, index) => {
        return (
          video?.snippet && 
          <div className="" key={index}>
          {video?.snippet?.thumbnails?.high &&
            <Link to={`videos/${video?.id?.videoId}`}>
            <img src={video?.snippet?.thumbnails?.high.url} alt={video?.snippet?.title}></img>
            <div className="my-2 flex items-start text-left">
              <div className="bg-red-500 rounded-full h-6 w-6">
              </div>
              <div className="ml-3">
                <h3 className="font-semibold line-clamp-2 max-w-xs">{video?.snippet?.title}</h3>
                <div className="mt-2 text-sm text-gray-500 font-normal">
                  <div className="mb-1">{video?.snippet?.channelTitle}</div>
                  <div>{video?.snippet?.publishTime?.substring(0,10)}</div>
                </div>

                </div>
                <BsThreeDotsVertical className="text-xl" />
            </div>
            </Link>
          }
          </div>
        )
      })}
    </div>
  )
}
