import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from "@/components/shad/ui/button"
import LoginPage from '@/pages/LoginPage.jsx'
import SearchBar from '../Navigation/SearchBar.jsx'
import Categories from '../Navigation/Categories.jsx'

function Header() {
  return (

    <div className="bg-black text-white pt-4 mx-3 mb-3 flex flex-row flex-wrap space-between">


      <div className="flex space-x-8 ">
        <h1 className='text-2xl bg-emerald-400 p-1 m-1 rounded-md h-10 font-mono'>MovieDB</h1>
        
        <Link to="/">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300 ">Home</span>
        </Link>
      
        <Link to="/movies/upcoming">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300">Upcoming</span>
        </Link>
        <Link to="/Favorites">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300">Watchlist</span>
        </Link>
      
        <Categories/>
          <SearchBar />
           <LoginPage/>


      </div>

    </div>
  )
}


export default Header;