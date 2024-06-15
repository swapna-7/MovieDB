import React from 'react'
import { Button } from "@/components/shad/ui/button"
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
 
  DropdownMenuLabel,
  
  DropdownMenuSeparator,
  
  DropdownMenuTrigger,
} from "@/components/shad/ui/dropdown-menu"



const categories = [
  { id: 27, name: 'Horror' },
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 14, name: 'Fantasy' },
  { id: 878, name: 'Sci-Fi' },]

  const languages = [
    { id: 'en', name: 'English' },
    { id: 'hi', name: 'Hindi' },
    { id: 'ta', name: 'Tamil' },
    { id: 'te', name: 'Telugu' },
    { id: 'ml', name: 'Malyalam' },
  ]
  




function Categories() {
  return (
    <div className='m-0 '>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='h-9 w-74 text-black text-lg '>All Categories<ChevronDown size={20} className='relative mt-1'/>
</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-black">
        <DropdownMenuLabel className='text-lg text-white'>Genres</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <div className='relative left-2 grid grid-cols-3 gap-2'>
       
       {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`} className='relative text-base cursor-pointer text-white font-medium hover:underline underline-offset-4'
        >{category.name}</Link>
        ))}
       
        </div>
        <DropdownMenuSeparator/>
        <DropdownMenuLabel className='text-lg text-white'>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <div className='relative left-2 grid grid-cols-3 gap-2'>
       
        {languages.map((language) => (
              <Link key={language.id} to={`/movies/${language.id}`}>
                <span className="relative text-base cursor-pointer text-white font-medium hover:underline underline-offset-4">{language.name}</span>
              </Link>
            ))}
       
  
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
</div>
  )
}


export default Categories
