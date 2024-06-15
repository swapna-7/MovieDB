import React, { useState, useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { getTVorMovieDetailsByID , getCreditsMovies} from '../../index.js';
import { Progress } from '@/components/shad/ui/progress';
import { Button } from '@/components/shad/ui/button';
import { Heart } from 'lucide-react'; // Assuming PlusSquare is not needed
import { languageCodes, genreCodes } from './id';
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';

const getLanguageName = (code) => languageCodes[code] || code;
const getGenreName = (id) => genreCodes[id] || 'Unknown';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const location = useLocation();
  const [credits, setCredits] = useState(null); // State for storing cast and crew


  const fromFavorites  = location.state ? location.state.fromFavorites  : false;
  const [isFavorite, setIsFavorite] = useState(fromFavorites);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await getTVorMovieDetailsByID('movie', id);
        setMovie(movieData);

        const creditsData = await getCreditsMovies('movie', id);
        setCredits(creditsData);

        console.log("Credits Data:", creditsData);

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

    console.log('Sending request', movie.id, user.id); 

    try { 



      const { data } = await axios.post(`http://localhost:5000/add-to-favorites`, {
        movieId: movie.id,
        clerkId: user.id
      });

      if (data) {
        console.log('Movie added to favorites');
        setIsFavorite(true);
      }
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
    }
  };

  const handleRemoveFromFavorites = async () => {
    

    console.log('Sending request', movie.id, user.id); 

    try {
      const {data} = await axios.post(`http://localhost:5000/remove-from-favorites`, {
        movieId: movie.id,
        clerkId: user.id
      });

      if (data) {
        console.log('Movie removed from favorites');
        setIsFavorite(false);
      }
    } catch (error) {
      console.error('Error removing movie from favorites:', error);
    }
  };

  if (!movie) {
    return <Progress />;
  }
  return (
    <>
    <div className='bg-gray-800 text-white'>
    <div className='flex flex-col md:flex-row overflow-hidden bg-cover w-full h-auto md:h-74' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}>
      <div className='basis-2/5 p-3 md:basis-1/3 mr-2 md:ml-auto md:mr-0 self-center md:self-auto'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} className='mt-8 h-96 object-cover m-5' />
      </div>
      <div className='basis-3/4 md:basis-2/3 m-16'>
        <div className='mx-20 p-2 h-100% bg-gradient-to-r from-[rgb(6,2,2)_32.4%] to-[rgb(137,30,47)_98.8%]'>
          <div className='mx-3'>
            <h1 className='text-red-400 font-serif font-extrabold text-2xl'>{movie.title || movie.name}</h1>
            <h3 className='text-yellow-600 font-semibold mt-8 '>Overview</h3>
            <p className='text-yellow-50 ml-4 text-lg'>{movie.overview}</p>
            <div className='flex space-x-9 mt-4'>
              <h3 className='text-yellow-600 font-semibold'>Rating:</h3><p className=' text-lg'>{movie.vote_average}</p>
              <h3 className='text-yellow-600 font-semibold'>Release Date:</h3><p className=' text-lg'>{movie.release_date}</p>
             
             <h3 className='text-yellow-600 font-semibold'>Language:</h3><p className=' text-lg'>{getLanguageName(movie.original_language)}</p>
             <h3 className='text-yellow-600 font-semibold'>Duration:</h3><p className=' text-lg'>{movie.runtime} minutes</p>

            
            </div>
            <div className='flex space-x-4 mt-2'>
              <h3 className='text-yellow-600 font-semibold'>Genre</h3>
              {movie?.genres?.map((genre, index) => (
  <p key={`${genre.id}-${index}`} className=' text-lg'>
    {getGenreName(genre.id)}
  </p>
))}
              <h3 className='text-yellow-600 font-semibold'>Popularity:</h3><p className=' text-lg'>{movie.popularity} </p>
              <h3 className='text-yellow-600 font-semibold'>Status:</h3><p className=' text-lg'>{movie.status} </p>



            </div>
            <div className='flex mt-6 '>
              <Button variant="ghost" className={"text-yellow-2xl mx-1 hover:text-yellow-50 ${isFavorite? 'text-green-500' : ''}"} onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}>
              <Heart className='text-white inline-block' /> {isFavorite? 'Remove from Favorites' : 'Add to Favorites'}
              </Button>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    <h2 className='flex text-red-400 font-semibold text-4xl m-4 justify-center'>Cast & Crew</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 '>
  {credits?.cast?.map((member) => (
    <div key={`${member.id}-${member.name}`} className='flex items-center m-4'>
      <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} className='w-16 h-16 rounded-full mr-4' />
      <div>
        <h3 className='text-yellow-50'>{member.name}</h3>
        <p className='text-yellow-50'>{member.character}</p>
      </div>
    </div>
  ))}
  {credits?.crew?.map((member) => (
    <div key={`${member.id}-${member.name}`} className='flex items-center mb-4'>
      <img src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} className='w-16 h-16 rounded-full mr-4' />
      <div>
        <h3 className='text-yellow-50'>{member.name}</h3>
        <p className='text-yellow-50'>{member.job}</p>
      </div>
    </div>
  ))}
</div>
  </div>
  </>
  );
}