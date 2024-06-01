import React, { useState, useRef, useEffect } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { Button, buttonVariants } from "@/components/shad/ui/button"
import LoginPage from '@/pages/LoginPage'
import { Input } from '@/components/shad/ui/input';
import { Search, ChevronDown } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shad/ui/popover"


function Header() {
  return (
    <nav>
    <div className='header'>
      <div className='headerleft'>
      <Link to="/"><span>Home</span></Link>
        <Link to="/movies/trending"><span>Trending</span></Link>
<Link to="/movies/top_10"><span>Top 10</span></Link>
<Link to="/movies/upcoming"><span>Upcoming</span></Link>
<Link to="/movies/mylist"><span>My List</span></Link>

<LoginPage/>
      </div>
    </div>
    </nav>
  )
}

export default Header

