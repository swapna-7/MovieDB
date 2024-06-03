import React, { useState, useRef, useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { Button, buttonVariants } from "@/components/shad/ui/button"
import LoginPage from '@/pages/LoginPage'
import SearchBar from '@/components/SearchBar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shad/ui/popover"


function Header() {
  return (
    <div className='header'>
      <div className='headerleft'>
      <Link to="/"><span>Home</span></Link>
        <Link to="/movies/trending"><span>Trending</span></Link>
<Link to="/movies/upcoming"><span>Upcoming</span></Link>
<Link to="/movies/mylist"><span>My List</span></Link>
<LoginPage/>
<div>
<SearchBar/>

</div>
      </div>
    </div>
  )
}

export default Header

