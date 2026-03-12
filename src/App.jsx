import { useState } from 'react'
import './style/home.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'


function App() {


  return (
   <Routes>
    <Route index element={<Home />} />
    <Route path=":movie" element={<Movie />} />
   </Routes>
  )
}

export default App
