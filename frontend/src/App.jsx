import React from 'react';
import './index.css';
import  Home   from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Header from './components/Header/Header.jsx';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './components/Navigation/SearchResults.jsx';
import Horror from './pages/Horror.jsx'
import Favorites from './pages/Home/Favorites.jsx';
import Movies from './pages/Categories/Action.jsx';
import Language from './pages/Categories/LanguagePage.jsx';



function App() {
  const categories = [
    { id: 27, name: 'Horror' },
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 14, name: 'Fantasy' },
    { id: 878, name: 'Sci-Fi' },
    
  ]
  const languages = [
    { id: 'english', name: 'English' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'tamil', name: 'Tamil' },
    { id: 'telugu', name: 'Telugu' },
    { id: 'malayalam', name: 'Malyalam' },
  ]

  
  

  return (
       <>
      <Router>
      <Header/>
        <LoginPage/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="movie/:id" element={<h1>Movie detail page</h1>}/>
          <Route path="movies/:type" element={<h1>Movie list page</h1>}/>
          <Route path="/moviedetails/:id" element={<MovieDetails />} /> // Add a route for MovieDetails
          <Route path="/movies/searchresults/:query" element={<SearchResults />} /> // Add a route for MovieDetails
          <Route path="/movies/horror" element={<Horror/>}/>
          <Route path="/Favorites" element={<Favorites/>} />
          
          {categories.map((category) => (
          <Route key={category.id} path={`/category/${category.id}`} element={<Movies categoryId={category.id} />} />
        ))}

        {languages.map((language) => (
          <Route key={language.id} path={`/category/${language.id}`} element={<Language categoryId={language.id} />} />
        ))}
                
        </Routes>
      </Router>
    </>
   
  );
}

export default App;

