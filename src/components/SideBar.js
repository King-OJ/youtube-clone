import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <aside className="h-screen bg-white lg:flex flex-col items-center space-y-10 my-8 sticky top-12 hidden ">
      <div className="space-y-6 text-black mx-2">
        <AiOutlineMenu className="text-2xl mx-auto"/>

        <div className="hover:bg-gray-100 text-center w-full mx-auto items-center p-2 md:p-3">
          <Link to="/search" >
            <HiHome className="text-xl mx-auto" />
            <p className="text-[10px] mt-2 font-thin">Home</p>
          </Link>
        </div>

        <div className="hover:bg-gray-100 text-center w-full mx-auto items-center p-2 md:p-3">
          <MdOutlineExplore className="text-xl mx-auto" />
          <p className="text-[10px]  mt-2 font-thin">Explore</p>
        </div>

        <div className="hover:bg-gray-100 text-center w-full mx-auto items-center p-2 md:p-3">
          <HiHome className="text-xl mx-auto" />
          <p className="text-[10px]  mt-2 font-thin">Shorts</p>
        </div>

        <div className="hover:bg-gray-100 text-center w-full mx-auto items-center p-2 md:p-3">
          <MdOutlineSubscriptions className="text-xl mx-auto" />
          <p className="text-[10px]  mt-2 font-thin">Subscriptions</p>
        </div>

        <div className="hover:bg-gray-100 text-center w-full mx-auto items-center p-2 md:p-3">
          <MdOutlineVideoLibrary className="text-xl mx-auto" />
          <p className="text-[10px]  mt-2 font-thin">Library</p>
        </div>
      </div>
    </aside>
  )
}
