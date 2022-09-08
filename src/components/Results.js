import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VideoCard from './VideoCard'
import { useGlobalContext } from '../context/ResultContextProvider'
import VideoDetail from './VideoDetail';

export default function Results() {

  let location = useLocation();
  const {id} = useParams()

  // if(location.pathname.includes("/search/videos/")){
  //   location.pathname = '/video-detail'
  // }
  
  const { fetchResult, result, loading, fetchComments } = useGlobalContext()

  useEffect(() => {
    
    fetchResult(location.pathname, id)
    
  }, [location.pathname, id])

  if(loading){
    return <div className='h-full flex justify-center items-center'>Loading.....</div>
  }
  
  

  switch (location.pathname) {
    case '/search':
      return <VideoCard videos={result?.length > 0 ? result : null} />
    case `/search/videos/${id}`:
      return <VideoDetail video={result?.length > 0 ? result : null} id={id} />

    default:
      return 'error'
  }
}
