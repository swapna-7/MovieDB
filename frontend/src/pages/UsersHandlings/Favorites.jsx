import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getTVorMovieDetailsByID , getTVorMovieVideosByID} from '../index.js';
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import Header from '../Home/Header.jsx';
import { Button } from '@/components/shad/ui/button';
import { languageCodes } from '../Home/id.js';
import { Play } from 'lucide-react';
import {  useNavigate } from 'react-router-dom';

const getLanguageName = (code) => languageCodes[code] || code;


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState({});
  const [selectedMovieId, setSelectedMovieId] = useState(null); // State to hold the selected movie ID for the trailer
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();


  if (!user) {
    return <div>Loading user data...</div>;
  }

  const userId = user.id;

  useEffect(() => {
    async function fetchFavorites() {
      try {
        const { data } = await axios.get(`http://localhost:5000/add-to-favorites`, {
          params: {
            userId,
          },
        });
        setFavorites(data.favList);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchFavorites();
  }, [userId]);

  useEffect(() => {
    if (favorites.length > 0) {
      const fetchAllMovieDetails = async () => {
        const detailsPromises = favorites.map(async (favorite) => {
          const type = 'movie';
          const detail = await getTVorMovieDetailsByID(type, favorite.movieId);
          const videoData = await getTVorMovieVideosByID('movie', favorite.movieId);
            
          
          
          return {...favorite,...detail };
        });
        const resolvedDetails = await Promise.all(detailsPromises);
        setMovieDetails(resolvedDetails.reduce((acc, curr) => ({...acc, [curr.movieId]: curr }), {}));
      };
      fetchAllMovieDetails();
    }
  }, [favorites]);


  const handleTrailer = (movieId) => {
    setSelectedMovieId(movieId);
    setShowTrailerModal(true);

  }
  const handleMoreDetails = (movieId) => {
    navigate(`/moviedetails/${movieId}`,{ state: { fromFavorites: true } });
  };


  if (loading) {
    return <motion.div animate={{ scale: 0.9 }} initial={{ scale: 1 }} transition={{ duration: 0.5 }}>Loading...</motion.div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=' '>
    <div className='mt-3 mx-11 '>
    <div className='relative w-full max-w-[1210px] h-auto grid grid-cols-5 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-min'> {/* Adjusted for grid layout */}
        {Object.values(movieDetails).map((movieDetail, index) => (
          <div key={index} className='h-[250px] w-[200px] bg-black rounded-lg  shadow-md cursor-pointer transition-all duration-500 ease-in-out overflow-hidden relative group hover:shadow-lg hover:scale-105'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="w-full h-full object-cover "
            />
            <div className='absolute inset-0 bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm p-5 rounded-tr-xl rounded-br-xl transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100'>
              <h1 className="text-red-600 mb-2 text-center font-bold">{movieDetail.title}</h1>
              <h3 className='text-red-600 text-center'>{getLanguageName(movieDetail.original_language)}</h3>
              <h1 className="text-red-600 mb-2 text-center font-bold">{movieDetail.vote_average.toFixed(1)}</h1>
            
                    
              <Button variant="ui" onClick={() => handleMoreDetails(movieDetail.movieId)}>more details</Button>
              </div>
          </div>
        ))}
      </div>
    </div>
    
    {showTrailerModal && (
        <TrailerPage id={selectedMovieId} onClose={() => setShowTrailerModal(false)} />
      )}

  </div>
  );
};

export default Favorites;