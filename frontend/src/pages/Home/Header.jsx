import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from "@/components/shad/ui/button"
import LoginPage from './LoginPage.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'
import Categories from './Categories.jsx'
import { SquarePlus } from 'lucide-react';


function Header() {
  return (

<<<<<<< HEAD
    <div className="bg-black text-white pt-0 mx-2 mb-1 flex flex-row flex-wrap space-between space-x-8">


=======
    <div className="bg-black text-white pt-0 mx-2 mb-1 flex flex-row flex-wrap space-between">


      <div className="flex space-x-8 ">
>>>>>>> 07b43e808b63698460475bfb3745e5183213c18f
        <h1 className='text-xl bg-emerald-400 p-1 m-1 mt-4 rounded-md h-8 font-mono'>MovieDB</h1>
        
        <Link to="/">
          <h2 className="text-xl cursor-pointer mt-4  text-white hover:text-teal-300 ">Home</h2>
        </Link>
      
        <Link to="/movies/upcoming">
          <h2 className="text-xl cursor-pointer mt-4 text-white hover:text-teal-300">Upcoming</h2>
        </Link>
        <Link to="/Favorites">
          <h2 className="text-xl cursor-pointer mt-4  text-white hover:text-teal-300">Watchlist</h2>
        </Link>
      
        <Categories/>
          <SearchBar />

<Button variant="ghost" className="mt-5 text-lg relative right-20 ">
<SquarePlus/>Add Movies

</Button>
          <Button variant= "ghost" className="relative left-[600px] top-0 text-white " style={{ top: -44 }}><SquarePlus/> Add Movie</Button>
           <LoginPage/>


<<<<<<< HEAD
=======
      </div>
>>>>>>> 07b43e808b63698460475bfb3745e5183213c18f

    </div>
  )
}


export default Header;