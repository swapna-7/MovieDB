import React from 'react'
import './Card.css'

function CardList(movie) {
  let img_path="https://image.tmdb.org/t/p/w500";
  return (
    <>
    <div className='movie w-36 shrink-0 '>
      <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.data.poster_path}`} className='w-36 h-42'/>
      <div className='movie-details  '>
        <div className='box'>
        <h4 className='title'>{movie.data.title}</h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default CardList

