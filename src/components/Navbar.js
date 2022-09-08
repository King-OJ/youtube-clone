import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/YouTube-Logo.wine.svg'
import { MdOutlineVoiceChat} from 'react-icons/md';
import { BsBell } from 'react-icons/bs';


import SearchBar from './SearchBar';



export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 bg-white z-20">
      <div className="flex items-center justify-between space-x-8 px-4 h-20 lg:pl-0 pb-[1px] border-b">
        <div className="flex items-center self-start space-x-4 text-2xl">
          <Link to='/'>
            <img src={logo} alt="" className="h-20" />
          </Link>
        </div>

        <SearchBar />

        <div className="flex items-center space-x-8 text-xl text-gray-400">
          <MdOutlineVoiceChat />
          <BsBell />
          <div className="cursor-pointer bg-blue-700  text-white py-1 px-2 rounded-full text-sm">C</div>
        </div>

      </div>
    </nav>
  )
}
