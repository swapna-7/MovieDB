import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from "@/components/shad/ui/button"
import LoginPage from '@/pages/LoginPage.jsx'
import SearchBar from '../Navigation/SearchBar.jsx'
import Categories from '../Navigation/Categories.jsx'

function Header() {
  return (

    <div className="bg-black text-white pt-4 mx-3 mb-3">


      <div className="flex space-x-8">
        <h1 className='text-2xl'>MovieDB</h1>
        <Link to="/">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300 ">Home</span>
        </Link>
        <Link to="/movies/trending">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300">Trending</span>
        </Link>
        <Link to="/movies/upcoming">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300">Upcoming</span>
        </Link>
        <Link to="/movies/mylist">
          <span className="text-2xl cursor-pointer text-white hover:text-teal-300">My List</span>
        </Link>
        {/* Assuming LoginPage and SearchBar are functional components */}
        <div className='ml-auto'>
        <Categories/>
          <SearchBar />
           <LoginPage/>

        </div>

      </div>

    </div>
  )
}


export default Header;