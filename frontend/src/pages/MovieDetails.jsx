import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTVorMovieDetailsByID } from '../../index.js';
import { Progress } from '@/components/shad/ui/progress';
import { Button } from '@/components/shad/ui/button';
import { Heart,PlusSquare } from 'lucide-react';
import { languageCodes,genreCodes } from './id.js';
import { useClerk } from "@clerk/clerk-react";
import axios from 'axios';


const getLanguageName = (code) => languageCodes[code] || code;


const getGenreName = (id) => genreCodes[id] || 'Unknown';
console.log(getGenreName(28)); // Should log "Action"




export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useClerk();


    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getTVorMovieDetailsByID('movie', id);
        setMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        console.error('Fetch Data Error:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);


  const handleAddToFavorites = async () => {
    if (!user) {
      alert('Please log in to add to favorites');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:5000/api/add-to-favorites`, {
        movieId: movie.id,
        clerkId: user.clerkId,
      });

      if (response.status === 201) {
        console.log('Movie added to favorites');
      } else {
        console.error('Error adding movie to favorites');
      }
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
    }
  };

  if (!movie) {
    return <Progress />;
  }

  return (
    <div>
          <div className='  '>
    <div className='flex flex-row ]
      overflow-hidden bg-cover w-full  '  style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
      }}>
        <div className='basis-2/5 mr-2' >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className='mt-8 h-96  ml-16'
      />
</div>
<div className='basis-3/4    mt-16 '>
    
    <div className='mx-3 h-80  bg-gradient-to-r from-[rgb(6,2,2)_32.4%] to-[rgb(137,30,47)_98.8%] '>
        
        <div className='mx-3'> 
        <h1 className='text-red-400 font-serif font-extrabold  text-2xl'>{movie.title || movie.name}</h1>
    
      <h3 className='text-yellow-600 font-semibold mt-8 '>Overview</h3>
      <p className='text-yellow-50 ml-4'>{movie.overview}</p>


     <div className='flex space-x-9  mt-4'>
     <h3 className='text-yellow-600 font-semibold'>Rating:</h3><p className='text-yellow-50'> {movie.vote_average}</p>
     <h3 className='text-yellow-600 font-semibold'>Release Date:</h3><p className='text-yellow-50'> {movie.release_date}</p>
     <h3 className='text-yellow-600 font-semibold'>Language:</h3><p className='text-yellow-50'>{getLanguageName(movie.original_language)}</p>
     </div>
     
     <div className='flex space-x-2 mt-2'> 
     <h3 className='text-yellow-600 font-semibold'>Genre</h3>
     {movie?.genres?.map((genre) => (
  <p key={genre.id} className='text-yellow-50'>
    {console.log(`Genre ID: ${genre.id}, Name: ${getGenreName(genre.id)}`)}
    {getGenreName(genre.id)}
  </p>
))}
      </div>


     <div className='flex mt-6 '>
      <Button variant="ghost" className="text-yellow-50 mx-1 hover:text-yellow-50" onClick={handleAddToFavorites} ><Heart className='text-white '/>Add to Favorites</Button>

     </div>

     </div>
     </div>

   
    </div>
   
   
    </div>
 
    </div>
    </div>
  );
}