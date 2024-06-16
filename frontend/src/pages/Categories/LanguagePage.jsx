import React, { useState, useEffect } from 'react';
import { getMoviesByLanguage } from '../index.js';

const LanguagePage = ({ languageId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMoviesByLanguage(languageId);
      setMovies(movies);
    };
    fetchMovies();
  }, [languageId]);

  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }

  return (
    <div>
      <h1>{languageId} Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.poster_url} alt={movie.title} />
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePage;