import React, { useState, useEffect } from 'react';
import { getKollywoodMovies, getTollywoodMovies, getBollywoodMovies, getTVorMovieDetailsByID } from '../../../index.js';
import { languageCodes } from '../id.js';
import { Button } from '@/components/shad/ui/button';
import { ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const getLanguageName = (code) => languageCodes[code] || code;

export default function Language({ languageId }) {
  console.log("Current Language ID:", languageId);

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      let fetchedMovies = [];
      switch (languageId) {
        case 'Tamil':
          fetchedMovies = await getKollywoodMovies('movie', languageId);
          break;
        case 'Telugu':
          fetchedMovies = await getTollywoodMovies('movie', languageId);
          break;
        case 'Hindi':
          fetchedMovies = await getBollywoodMovies('movie', languageId);
          break;
        default:
          break;
      }
      setMovies(fetchedMovies);
    };
    fetchMovies();
  }, [languageId]);

  useEffect(() => {
    const fetchData = async () => {
      if (id !== null) {
        try {
          const movieData = await getTVorMovieDetailsByID('movie', id);
          setMovie(movieData);
        } catch (error) {
          console.error('Fetch Data Error:', error);
        }
      }
    };
    fetchData();
  }, [id]);

  const getlanguageName = () => {
    const genreMap = {
      en: 'English',
      hi: 'Hindi',
      ta: 'Tamil',
      te: 'Telugu',
      ml: 'Malyalam',
    };
    return genreMap[languageId] || 'Unknown';
  };

  return (
    <div>
      <div className='bg-red-950'>
        <h1 className="text-4xl font-bold text-creepster text-center text-yellow-500 py-1">{getlanguageName()}</h1>
      </div>
      <div className='bg-red-950'>
        <div
          className="grid grid-cols-4 gap-1 p-2 ml-20"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)', // corrected typo here
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
