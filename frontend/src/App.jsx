import React from 'react';
import './index.css';
import  Home   from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import Header from './components/Header/Header.jsx';
function App() {
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

          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </>
   
  );
}

export default App;

