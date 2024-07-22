import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserMovie() {

    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
      axios.get('http://localhost:5000/addmovies')
       .then(response => {
          setMovies(response.data);
        })
       .catch(error => {
          console.error('Error fetching movies:', error);
        });
    }, []);


  return (
    <div>
        
    <h1>User Movies</h1>
    <ul>
      {movies.map(movie => (
        <li key={movie._id}>
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Rating: {movie.ratings}</p>
          <p>Genre: {movie.genre}</p>
          <p>Language: {movie.language}</p>
          <p>Uploaded by: {movie.userId.username}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}