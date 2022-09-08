import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdSettingsVoice } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/ResultContextProvider'

export default function SearchBar() {

  const {searchTerm, setSearchTerm, fetchSearchedVideo }= useGlobalContext()

  const navigate = useNavigate();

  function findVideo(e){
    e.preventDefault();
    navigate('/search');
    fetchSearchedVideo(searchTerm)
  }

  return (
    <form action="" className="hidden sm:flex space-x-2 items-center" onSubmit={findVideo}>
      <div className="w-36 md:w-72 lg:w-120 text-gray-600 flex shadow-sm">
        <input type="text" className="inline-block px-2 py-2 flex-1 bg-white border border-gray-300 placeholder:text-gray-400 placeholder:font-semibold outline-none rounded-l-sm" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        
        <button className="border border-gray-300 py-2 px-4 bg-gray-50 rounded-r-sm text-2xl" onClick={findVideo}>
          <AiOutlineSearch />
        </button>
        
      </div>

      <div className="cursor-pointer p-2 rounded-full bg-gray-50 text-2xl text-gray-600">
        <MdSettingsVoice />
      </div>

    </form>
  )
}
