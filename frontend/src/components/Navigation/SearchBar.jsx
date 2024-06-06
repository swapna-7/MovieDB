import React from 'react'
import { Input} from '@/components/shad/ui/input';
import { Button } from '@/components/shad/ui/button';
import { Search

 } from 'lucide-react';
export default function SearchBar() {
  return (
    <div className="relative h-2 w-full left-36 top-0" style={{top:-37}}>
    <Input   className="block text-black p-2.5 w-96 z-20 h-9  ml-16 " placeholder="Search Movies ..." required />
    <Button variant ="ghost" type="submit" className="absolute top-0 end-0 p-3 text-sm font-medium h-9 text-black bg-transparent   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <Search size={15} />
        <span className="sr-only text-white">Search</span>
    </Button>
</div>  )
}