import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './Banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


 const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

   useEffect(() =>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=edef38af3394ef62d6c2066aca5b7b25")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
    .catch(err => console.error('error:' + err));
   },[])

   const [Scrolled , SetScrolled] = useState(false);

 window.onscroll = () =>{

   SetScrolled(window.pageYOffset === 0 ? false : true);
   return () => (window .onscroll = null);
 };

    return (
        <>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popularMovies.map(movie =>(
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                           <div className="image">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="overlay">
                                    <div className="title">{movie ? movie.original_title: ""}</div>
                                    <div className="runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                }
</Carousel>
        </div>

        </>
    );
}

export default Home;


