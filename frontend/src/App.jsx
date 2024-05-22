
import React from 'react';
import  Home   from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';

function App() {
  return (
       <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    
    </>
   
  );
}

export default App;

