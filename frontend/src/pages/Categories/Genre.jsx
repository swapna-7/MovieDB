import React, { useState, useEffect } from 'react';
import { getTVorMoviesByGenre, getTVorMovieDetailsByID } from '../index.js'
import { languageCodes } from '../Home/id.js';

import { Button } from '@/components/shad/ui/button';
import { ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from '../CardSlider/Card.jsx'


const getLanguageName = (code) => languageCodes[code] || code;

export default function Movies({categoryId}) {
  console.log("Current Category ID:", categoryId); // Add this line

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getTVorMoviesByGenre('movie', categoryId);
      setMovies(movies);
    };
    fetchMovies();
  }, [categoryId]);

  useEffect(() => {
    if (id!== null) {
      const fetchData = async () => {
        try {
          const movieData = await getTVorMovieDetailsByID('movie', type);
          setMovie(movieData);
        } catch (error) {
          console.error('Fetch Data Error:', error);
        }
      };
      fetchData();
    }
  }, [id]);


  const getCategoryName = () => {
    console.log(`CategoryId: ${categoryId}`);
  
    // Assuming these are the correct mappings for your genres
    const genreMap = {
      27: 'Horror',
      28: 'Action',
      12: 'Adventure',
      14: 'Fantasy',
      878: 'Sci-Fi',
    };
  
    return genreMap[categoryId] || 'Unknown';
  }

  return (
    <div>
      <div className=' '>
        <h1 className="text-4xl font-bold text-creepster text-center text-white m-4 p-1">{getCategoryName()}</h1>
      </div>
      <div className=''>
        <div
          className="grid grid-cols-4 gap-1 p-2 ml-20"
          style={{
            gridTemplateColumns: 'epeat(4, 1fr)',
          }}
        >
          {movies.map((movie) => (
            
                <Link to={`/moviedetails/${movie.id}`}>
                <Card info={movie} key={movie.id}/>
                </Link>
              
          ))}
        </div>
      </div>
    </div>
  );
}