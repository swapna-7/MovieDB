import React from 'react'
import './Card.css'

function Card(movie) {
  let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <>
<<<<<<< HEAD
    <div className='movie w-36 '>
=======
    <div className='movie w-36 shrink-0 '>
>>>>>>> 07b43e808b63698460475bfb3745e5183213c18f
      <img src={img_path+movie.info.poster_path} className='w-36 h-42'/>
      <div className='movie-details  ' >
        <div className='box'>
        <h4 className='title'>{movie.info.title}</h4>

        </div>
      </div>
    </div>
    </>
  )
}

export default Card
