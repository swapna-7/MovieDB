import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../CardSlider/CardList.jsx'
import { Link } from 'react-router-dom';

function SearchResults() {
    const { query } = useParams();

  const [movies, setMovies] = useState([])
  useEffect(()=>{

      const searchMovies = async (event) => {
        console.log("submitting");
    
        const url=`https://api.themoviedb.org/3/search/movie?api_key=edef38af3394ef62d6c2066aca5b7b25&language=en-US&query=${query}&page1&include_adult=false`;
    
        try {
          const res = await fetch(url);
          const data = await res.json();
          //console.log(data); debug
          setMovies(data.results);
          //console.log(movies);
        }catch(err){
          console.log(err)
        }
      }
      searchMovies();
  },[query])

  return (
      <Link className="flex flex-row flex-wrap" to={`/moviedetails/${movies.id}`}>
    {movies.filter(movie => movie.poster_path).map((movie) => (
      <CardList data={movie}/>    
      ))}
    </Link>
  )
}

export default SearchResults
