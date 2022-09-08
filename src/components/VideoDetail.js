import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { BiLike, BiDislike, BiShare, BiDownload, BiCut } from 'react-icons/bi'
import { HiOutlineSaveAs } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BsBell } from 'react-icons/bs';
import VideoComments from './VideoComments'
import { useGlobalContext } from '../context/ResultContextProvider'

export default function VideoDetail({ video, id }) {
  
  const { fetchComments, comments } = useGlobalContext()

  useEffect(() => {
    fetchComments(id)
   
  }, [])
  
  
  return (
    <div className="w-full flex flex-col xl:flex-row">
      <div className="xl:w-2/3 mx-2">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" height="550px"/>
      
        <h3 className='text-center md:text-left font-semibold w-full text-left mt-3 text-lg'>{video?.[0]?.snippet?.title}</h3>

        <div className="mx-auto md:mx-0 flex flex-col md:flex-row justify-between py-3 border-b items-center">

          <div className="text-gray-400 text-sm flex mb-3">
            <p className="tracking-wide">{video?.[0]?.statistics?.viewCount} Views <span className="mx-1 text-2xl">.</span>
            {video?.[0]?.snippet?.publishedAt?.substring(0, 10)}
            </p>  
          </div>

          <div className="sm:space-x-2 grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:gap-0">
            <div className="bg-gray-200 rounded-full px-3 py-1">
              <a href="#" className="text-xs md:text-sm"><BiLike className="inline mr-1" /> <span className='text-sm font-semibold'>{video?.[0]?.statistics?.likeCount}</span></a>
            </div>
            <div className="bg-gray-200 rounded-full px-3 py-1">
              <a href="#" className="text-xs md:text-sm"><BiDislike className="inline mr-1" /> <span className='text-sm font-semibold'>Dislike</span></a>
            </div>
            <div className="bg-gray-200 rounded-full px-3 py-1">
              <a href="#" className="text-xs md:text-sm"><BiShare className="inline mr-1" /> <span className='text-sm font-semibold'>Share</span></a>
            </div>
            <div className="bg-gray-200 rounded-full px-3 py-1">
              <a href="#" className="text-xs md:text-sm"><BiDownload className="inline mr-1" /> <span className='text-sm font-semibold'>Download</span></a>
            </div>
            <div className="bg-gray-200 rounded-full px-3 py-1">
              <a href="#" className="text-xs md:text-sm"><BiCut className="inline mr-1" /> <span className='text-sm font-semibold'>Clip</span></a>
            </div>
            <div className="bg-gray-200 rounded-full px-3 py-1">
              <a href="#" className="text-xs md:text-sm"><HiOutlineSaveAs className="inline mr-1" /> <span className='text-sm font-semibold'>Save</span></a>
            </div>

          </div>
        </div>  

        <div className="flex flex-col items-center md:flex-row space-y-2 justify-between mt-3 space-x-4 items-start">
          <div className="rounded-full p-1">
            <img src={video?.[0]?.snippet?.thumbnails?.high?.url} alt="" className=" h-10 w-10 rounded-full ring" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h4 className="font-semibold">{video?.[0]?.snippet?.channelTitle}</h4>
            <p className="mt-4 text-left line-clamp-5">{video?.[0]?.snippet?.description}</p>
          </div>

          <div className="flex md:space-x-6 items-center flex-col space-y-2 md:space-y-0 md:flex-row">
            <div>
              <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded font-semibold">SUBSCRIBED</button>
            </div>
            <div >
              <a href="#" className="inline-block">  
                <BsBell />
              </a>
            </div>
          </div>
        </div>  
      </div>

      <VideoComments comments = {comments?.length > 0 ? comments : null} />


    </div>
  )
}
