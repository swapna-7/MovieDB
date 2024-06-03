import React from 'react'
import { Input } from "@/components/shad/ui/input"
import { Button } from './shad/ui/button'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className="">
      <Input className=''type="search" placeholder="Search Movie ..." />
      <Button className='text-black bg-white rounded-r-lg'><SearchIcon/></Button>
      </div>
  )

}

export default SearchBar
