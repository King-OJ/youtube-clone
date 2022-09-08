import React from 'react'
import { useGlobalContext } from '../context/ResultContextProvider'

export default function Links() {

  const { fetchResult, searchTerm, setSearchTerm, fetchSearchedVideo } = useGlobalContext()

  return (
    <div className="
    px-4 py-3 flex space-x-4 border-b sticky top-20 bg-white z-20">

      <button className="bg-black py-1 px-3 text-white rounded-l-full rounded-r-full outline-none border border-black text-md font-normal" onClick={()=>{
        setSearchTerm("")
        console.log(searchTerm)
        fetchResult('/search')}
      }>All</button>
      
      <button className="bg-gray-200 py-1 px-4 text-gray-800 rounded-l-full rounded-r-full outline-none border border-gray-300 text-md font-normal" onClick={()=>{
        fetchSearchedVideo('music')
        setSearchTerm("music")}
      }>Music</button>
      
      <button className="bg-gray-200 py-1 px-4 text-gray-800 rounded-l-full rounded-r-full outline-none border border-gray-300 text-md font-normal" onClick={()=>{
        fetchSearchedVideo('news')
        setSearchTerm("news")}
      }>News</button>
      
      <button className="bg-gray-200 py-1 px-4 text-gray-800 rounded-l-full rounded-r-full outline-none border border-gray-300 text-md font-normal" onClick={()=>{
        fetchSearchedVideo('football')
        setSearchTerm("football")}
      }>Football</button>
      
      <button className="bg-gray-200 py-1 px-4 text-gray-800 rounded-l-full rounded-r-full outline-none border border-gray-300 text-md font-normal" onClick={()=>{
        fetchSearchedVideo('dance')
        setSearchTerm("dance")}
      }>Dance</button>

   
    </div>
  )
}
