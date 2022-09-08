import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Results from './Results'

export default function Paths() {

  return (
    <div className="py-2 bg-gray-50">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />

        <Route path="/search" element={<Results />} />
        <Route path="/search/videos/:id" element={<Results />} />
      </Routes>
    </div>
  )
}
