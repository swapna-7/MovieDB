import React,{useState,useEffect} from 'react'
import { Input} from '@/components/shad/ui/input';
import { Button } from '@/components/shad/ui/button';
import { Search} from 'lucide-react';
import CardList from '../CardSlider/CardList.jsx'
import '../Navigation/Search.css'
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState(''); 
  const navigate = useNavigate();
  return (
    <>
    <form className="form" onSubmit={(e)=>{e.preventDefault() 
      navigate(`/movies/searchresults/${query}`)}}>
      <label className="label" htmlFor="query"></label>
      <input className="query text-black" type="text" name="query"
      placeholder="Search Movies"
      value={query} onChange={(event) => setQuery(event.target.value)}
      required/>
      <button className="button " type="submit"><IoSearch /></button>
    </form>
    
    </>
  )
}