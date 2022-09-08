import React from 'react'

export default function VideoComments({comments}) {
  
  return (
    <div className="container mx-auto mt-6 ml-3 space-y-6 xl:mt-0 xl:w-1/3">
      <h4 className="font-bold underline">Video Comments</h4>
      {comments?.map((comment)=> {
        const { id } = comment
        return (
          <div className="flex items-start" key={id}>
            <div className="h-10 w-10 rounded-full ">
              <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} className="h-full w-full rounded-full" alt="" />
            </div>
            <div className="ml-2 flex-1 space-y-2">
              <h6 className="capitalize">{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</h6>
              <p className="text-sm" dangerouslySetInnerHTML={{__html: comment?.snippet?.topLevelComment?.snippet?.textDisplay}}></p>
            </div>
          </div>
      )
      })}
      
    </div>
  )
}
