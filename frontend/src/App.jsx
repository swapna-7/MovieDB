import React from 'react';
import './index.css';
import  Home   from './pages/Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Home/LoginPage.jsx';
import Header from './pages/Home/Header.jsx';
import MovieDetails from './pages/Home/MovieDetails';
import SearchResults from './pages/SearchBar/SearchResults.jsx';
import Favorites from './pages/UsersHandlings/Favorites.jsx';
import Movies from './pages/Categories/Genre.jsx';
import Language from './pages/Categories/LanguagePage.jsx';
import { useParams } from 'react-router-dom';
import UploadWidget from './AddMovies/AddMovies';




function App() {
  const categories = [
    { id: 27, name: 'Horror' },
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 878, name: 'Sci-Fi' },
    
  ]
  const { languageId } = useParams();

  
  

  return (
       <>
      <Router>
      <Header />
        <LoginPage/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="movie/:id" element={<h1>Movie detail page</h1>}/>
          <Route path="/moviedetails/:id" element={<MovieDetails />} /> // Add a route for MovieDetails
          <Route path="/movies/searchresults/:query" element={<SearchResults />} /> // Add a route for MovieDetails
          <Route path="/Favorites" element={<Favorites/>} />
          <Route path="/addmovies" element={<UploadWidget/>} />
          
          {categories.map((category) => (
          <Route key={category.id} path={`/category/${category.id}`} element={<Movies categoryId={category.id} />} />
         ))}

             <Route path="/movies/:languageId" element={<Language />} />
            
        </Routes>
      </Router>
    </>
   
  );
}

export default App;

