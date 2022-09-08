import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Links from './components/Links'


import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Paths from './components/Paths'

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex">
        <SideBar />
        <div className="w-full" >
          <Navbar />
          <Links />  
          <Paths />
        </div>
      </div>
      
    </BrowserRouter>
  )
}
