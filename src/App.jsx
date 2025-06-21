import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx"
import Favorites from "./pages/Favorites/Favorites.jsx"
import Detail from "./pages/Detail/Detail.jsx"
import Detailitem from "./components/detail-item/Detailitem.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"


export default function App() {


  return (
    <div className='App_container'>
     <Navbar />

     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favorites' element={<Favorites/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
     </Routes>
    </div>
  )
}
